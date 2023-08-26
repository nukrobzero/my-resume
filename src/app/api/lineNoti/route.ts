import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(request: NextRequest) {
  const getForm = await request.formData();
  const email = getForm.get("email") as string;
  const message = getForm.get("message") as string;
  const name = getForm.get("name") as string;
  const tel = getForm.get("tel") as string;

  const data = `message= Name:${name} Email:${email} Tel:${tel} Message:${message}`;

  try {
    const response = await fetch(`https://notify-api.line.me/api/notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${process.env.LINE_NOTIFY_ACCESS_TOKEN}`,
      },
      body: data,
    });

    const res = await response.json();

    return NextResponse.json({ message: "ok", res }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
