import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestUrl = new URL(req.url)
  const formData = await req.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  console.log('data', data);
  console.log('error', error);
  console.log('\n\n');

  // return NextResponse.json({message: data})

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}