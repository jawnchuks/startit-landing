
import NewUserEmail from '@/components/UI/Emails/NewUserEmail';
import WelcomeEmail from '@/components/UI/Emails/WelcomeEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_QBFhgEcb_N8XGDcE9UCbs4TxNU2gEz5PD');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, address, selectedOption, phoneNumber } = body;

      // Send email to the user
    const userResponse = await resend.emails.send({
      from: 'Startit <info@startit.africa>',
      to: [email],
      subject: 'Thanks for joining Startit',
      react: WelcomeEmail({ userName: name }),
      text: 'Thanks for joining Startit. We are excited to have you on board!',
    });

    // Send email to the admin
    const adminResponse = await resend.emails.send({
      from: 'Startit <info@startit.africa>',
      to: ['jawnchuks@gmail.com', 'verifyforimpact1@gmail.com'],
      subject: 'New User Registered on Startit',
      react: NewUserEmail({ userName: name, formData: body }),
      text: `New user registered:\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}\nSelected Option: ${selectedOption}`,
    });

    if (userResponse && adminResponse) {
      return NextResponse.json({ message: 'Emails sent successfully' });
    }
    return NextResponse.json({ userResponse, adminResponse });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
