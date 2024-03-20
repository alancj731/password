import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const data = await req.json();
  if (!data) {
    // If id is not a number, return an error
    return Response.json({
      status: 400,
      message: "Invalid data input. Failed to save!",
    });
  }

  try {
    const { website, username, password } = data;

    const savedData = await prisma.memo.create({
      data: {
        website,
        username,
        password,
      },
    });

    return Response.json({ status: 200, message: savedData });
  } catch (error) {
    console.error("Failed to save to database:", error);
    return Response.json({ status: 500, message: "Failed to save!" });
  }
}

export async function GET(req: Request) {
    const data = await prisma.memo.findMany();
    return Response.json({ status: 200, data });
}
