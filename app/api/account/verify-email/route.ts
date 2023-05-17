import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

type jwtPayload = {
  email: string;
  iat: number;
  exp: number;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { token } = body;
  if (!token) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }
  const isValid = await new Promise((resolve) => {
    jwt.verify(token, process.env.JWT_KEY!, (err: any) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
  if (!isValid) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }
  jwt.verify(token, process.env.JWT_KEY!, (err: any) => {
    if (err) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
  });
  const jwtDecoded = jwt.decode(token) as jwtPayload;
  const email = jwtDecoded.email;
  const user = await prisma.user.findUnique({
    where: {
      email
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  if (user.emailVerified) {
    return NextResponse.json(
      { error: "Email already verified" },
      { status: 400 }
    );
  }
  const res = await prisma.user.update({
    where: {
      email,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  return NextResponse.json(res);
}
