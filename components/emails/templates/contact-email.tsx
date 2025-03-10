import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  subject: string;
  name: string;
  email: string;
  address?: string;
  service?: string;
  description: string; // rich HTML content
}

export const ContactEmailTemplate: React.FC<ContactEmailProps> = ({
  subject,
  name,
  email,
  address,
  service,
  description,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={{ backgroundColor: '#f6f6f6', padding: '20px' }}>
        <Container
          style={{
            backgroundColor: '#ffffff',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <Section>
            <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
              New Contact Form Submission
            </Text>
            <Text style={{ marginBottom: '8px' }}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={{ marginBottom: '8px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ marginBottom: '8px' }}>
              <strong>Email:</strong> {email}
            </Text>
            {address && (
              <Text style={{ marginBottom: '8px' }}>
                <strong>Address:</strong> {address}
              </Text>
            )}
            {service && (
              <Text style={{ marginBottom: '8px' }}>
                <strong>Service Requested:</strong> {service}
              </Text>
            )}
            <Section style={{ marginTop: '16px' }}>
              <Text style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Description:
              </Text>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmailTemplate;
