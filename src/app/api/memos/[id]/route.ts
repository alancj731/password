import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id); // Get the id from the URL

  // Ensure we're handling DELETE requests
  try {
    // Assuming `id` is a string and needs to be parsed as a number
    if (isNaN(id)) {
      // If id is not a number, return an error
      return Response.json({ status: 400, message: "Invalid user id." });
    }

    const deletedUser = await prisma.memo.delete({
      where: {
        id: id,
      },
    });
    return Response.json({status:200, message: deletedUser});
  } catch (error) {
    console.error("Failed to delete user:", error);
    return Response.json({ status: 500, message: "Failed to delete user." });
  }
}
