import { formatDate } from '@/lib/formatDate';
import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import React from 'react';

const StackOverflowTipsEmail = ({ reminder, notification }) => {
    const { reminder_type, reminder_title, description, how_to_celebrate, event_date, } = reminder;
    const { message } = notification;
    const convertReminderType = (reminder_type) => {
        return reminder_type.toLowerCase();
    }
    return (
        <Html>
            <Head />
            <Body style={main}>
                <Preview>It's a {reminder_type}!</Preview>
                <Container style={container}>
                    <Section style={header}>
                        <Row>
                            <Column style={headerContent}>
                                <Heading style={headerContentTitle}>{reminder_title}</Heading>
                                <Text style={headerContentSubtitle}>The date of the {convertReminderType(reminder_type)} is {formatDate(event_date)}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Section style={content}>
                        <Heading as="h2" style={title}>Details</Heading>
                        <Text style={paragraph}>{description}</Text>

                        <Heading as="h2" style={title}>How you wanted to celebrate:</Heading>
                        <Text style={paragraph}>{how_to_celebrate}</Text>

                        <Hr style={divider} />
                        <Heading as="h2" style={title}>Special message for today:</Heading>
                        <Text style={paragraph}>{message}</Text>

                        <Heading as="h3" style={title}>Visit <Link href="https://mate.fabbythemes.com">Memory Mate</Link> for more actions!</Heading>
                    </Section>
                </Container>

                <Section style={footer}>
                    <Text style={footerText}>You're receiving this email because your Stack Overflow activity triggered this tip or reminder.</Text>
                </Section>
            </Body>
        </Html>
    );
}

export default StackOverflowTipsEmail;

const main = { backgroundColor: '#f3f3f5', fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif' };
const container = { width: '680px', maxWidth: '100%', margin: '0 auto', backgroundColor: '#ffffff'};
const headerContent = { padding: '20px 30px 15px' };
const headerContentTitle = { color: '#fff', fontSize: '27px', fontWeight: 'bold', lineHeight: '27px' };
const headerContentSubtitle = { color: '#fff', fontSize: '17px' };
const title = { margin: '0 0 15px', fontWeight: 'bold', fontSize: '21px', lineHeight: '21px', color: '#0c0d0e', padding: '20px 15px 0px 15px' };
const paragraph = { fontSize: '15px', lineHeight: '21px', color: '#3c3f44', padding: '0px 15px 0px 15px' };
const divider = { margin: '30px 0' };
const footer = { width: '680px', maxWidth: '100%', margin: '32px auto 0 auto', padding: '0 30px' };
const content = { padding: '30px 30px 40px 30px' };
const header = { borderRadius: '5px 5px 0 0', display: 'flex', flexDirection: 'column', backgroundColor: '#2b2d6e' };
const footerText = { fontSize: '12px', lineHeight: '15px', color: '#9199a1', margin: '0' };
