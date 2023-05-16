import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }
  const isValid = await new Promise((resolve) => {
    jwt.verify(token, process.env.JWT_KEY!, (err) => {
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
  const email = jwt.decode(token) as string;
  const user = await prisma.user.findUnique({
    where: {
      email,
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
