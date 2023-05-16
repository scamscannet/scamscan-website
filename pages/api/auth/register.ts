import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    res.status(400).send("User already exists");
  } else {
    const token = jwt.sign({ email }, process.env.JWT_KEY!, {
      expiresIn: "1d",
    });
    const user = await prisma.user.create({
      data: {
        email,
        password: await hash(password, 10),
        emailVerifyToken: token,
      },
    });
    const info = await transporter.sendMail({
      from: "ScamScan",
      to: email,
      subject: "Verify your email",
      html: `<a href="http://localhost:3000/account/verify-email?token=${token}">Verify your email</a>`,
    });
    console.log(info);
    res.status(200).json(user);
  }
}
