// NewUserEmail.tsx

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
import StartItLogo from '../../../public/images/startit-nav-logo.png';


interface NewUserEmailProps {
  userName: string;
  formData: {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    selectedOption: string;
  };
}

const NewUserEmail: React.FC<NewUserEmailProps> = ({ userName, formData }) => {
  return (
    <Html>
      <Head />
      <Preview>New user registered: {userName}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={StartItLogo.src}
                width="120"
                height="40"
                alt="Startit"
              />
            </Section>
            <Section>
              <Text style={heading}>New User Registered: {userName}</Text>
              <Text style={paragraph}>
                A new user has registered on Startit. Below are the details:
              </Text>

              <Hr style={hr} />

              <Section>
                <Text style={subHeading}>User Details:</Text>
                <Text>Name: {formData.name}</Text>
                <Text>Email: {formData.email}</Text>
                <Text>Address: {formData.address}</Text>
                <Text>Phone Number: {formData.phoneNumber}</Text>
                <Text>Message: {formData.selectedOption}</Text>
              </Section>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default NewUserEmail;

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

const subHeading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
  marginTop: '20px',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};
