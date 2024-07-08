import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  message: string;
};

export async function GET(req: NextRequest, res: NextResponse) {
  // return res.json({ message: "Hello World!" });
  console.log("Printing Shit up!");
  return NextResponse.json({
    hello: "world",
  });
}
