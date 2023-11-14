
import WelcomeEmail from '@/components/UI/Emails/WelcomeEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_QBFhgEcb_N8XGDcE9UCbs4TxNU2gEz5PD');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, address, selectedOption, phoneNumber} = body
    const data = await resend.emails.send({
      from: 'Startit <info@startit.africa>',
      to: [email], 
      subject: 'Thanks for joining Startit',
      react: WelcomeEmail({ userName: name }),
    });

    if (data) {
      return NextResponse.json( { message: 'Email sent successfully' })
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
