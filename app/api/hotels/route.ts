// CRUD for adding hotels
// CRUD for adding decorations
// CRUD for caterings

import { NextRequest, NextResponse } from "next/server";

//  All of these will be interlinked with each other

export async function GET() {
  return NextResponse.json({ Hotel: "Working Great" });
}

export async function POST() {

  return NextResponse.json({ Hotel: "Added Successfully!" });
}

export async function PUT() {
    
  return NextResponse.json({ Hotel: "Update Hotel" });
}


export async function PATCH() {
    
  return NextResponse.json({ Hotel: "Delete Hotel" });
}
