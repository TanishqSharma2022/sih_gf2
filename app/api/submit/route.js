import { NextResponse } from "next/server"

export  async function POST(req) {

    const body = await req.json();
    const {name, email, password, number} = body;
    return NextResponse.json({body})
  }