import { NextResponse, NextRequest } from "next/server";
import prisma from "@src/functions/prisma";
// import moment from "moment";

export async function GET() {
  const dailyLogs = await prisma.daily_Logs.findMany();

  return NextResponse.json({ message: 'hello world', data: dailyLogs });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  const dailyLogs = await prisma.daily_Logs.create({
    data: body
  })

  return NextResponse.json(dailyLogs, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const { id, yesterday, today, accomplish, impediment, daily_journal } = await req.json();

  const data = await prisma.daily_Logs.update({
    where: { id: id },
    data: { yesterday, today, accomplish, impediment, daily_journal }
  })

  return NextResponse.json(data, { status: 200 });
}