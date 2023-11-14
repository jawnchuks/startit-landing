
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
import StartItLogo from '../../../public/images/startit-nav-logo.png';

interface WelcomeEmailProps {
  userName?: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : '';

export const WelcomeEmail = ({
  userName = 'User',
}: WelcomeEmailProps) => {
  const previewText = `Welcome to Startit, ${userName}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
            //   src={`${baseUrl}/static/media/startit-nav-logo.4b3e802b.png`}
                src={StartItLogo.src}
                width="120"
                height="40"
                alt="Startit"
              />
            </Section>
            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>Welcome onboard, {userName}!</Text>
                <Text style={paragraph}>
                  Thank you for joining the waitlist of Startit crowdfunding app. We&apos;re excited to have you on board!
                </Text>
                <Text style={paragraph}>
                  Your interest in our platform means a lot to us. We&apos;ll keep you updated with the latest
                  developments and notify you as soon as opportunities become available.
                </Text>
                <Text style={paragraph}>
                  Startit is your gateway to a world of crowdfunding opportunities, where you can support innovative projects and bring ideas to life.
                </Text>
                <Text style={paragraph}>
                    If you have any questions or need assistance, feel free to reach out to our support team.
                 </Text>
                <Button style={button} href="https://startit.africa/">
                  Explore Startit
                </Button>
              </Row>
            </Section>

            <Section>
              <Row>
                <Text style={{ ...paragraph, fontWeight: '700' }}>
                  Common questions
                </Text>
                <Text>
                  <a href="https://startit.africa/">How does Startit work?</a>
                </Text>
                <Text>
                  <a href="https://startit.africa/">Frequently Asked Questions</a>
                </Text>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const button = {
  backgroundColor: '#4CAF50', // Change to your preferred color
  borderRadius: '3px',
  color: '#fff',
  fontSize: '18px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '12px'
};
