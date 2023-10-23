import { NextResponse, NextRequest } from "next/server";
import prisma from "@src/functions/prisma";

export async function GET(req: NextRequest) {
  // QUERY PARAMETERS
  const limit: any = req.nextUrl.searchParams.get('limit') === null ? 5 : Number(req.nextUrl.searchParams.get('limit'));
  const offset: any = req.nextUrl.searchParams.get('offset') === null ? 1 : Number(req.nextUrl.searchParams.get('offset'));
  const fromDate: any = req.nextUrl.searchParams.get('fromDate');
  const toDate: any = req.nextUrl.searchParams.get('toDate');
  const userId: any = req.nextUrl.searchParams.get('userId') === null ? null : req.nextUrl.searchParams.get('userId');

  let data_per_page = offset;
  let current_page = limit;

  // DATE FILTER
  let date_filter: any = {};

  if (fromDate !== null) date_filter['gte'] = new Date(fromDate)
  if (toDate !== null) date_filter['lte'] = new Date(toDate)

  const dailyLogs = await prisma.daily_Logs.findMany({
    where: {
      deletedAt: null,
      createdAt: date_filter,
      user_id: userId
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: data_per_page,
    skip: (current_page - 1) * data_per_page,
  });

  return NextResponse.json({ message: 'successfully got data', data: dailyLogs, limit: data_per_page, offset: (current_page - 1) * data_per_page });
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