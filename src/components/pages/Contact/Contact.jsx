import React from 'react';
import { Col } from 'react-grid-system';
import { ContactInfo } from 'src/utils/dbTemp';
import Landing from 'src/components/layouts/Landing';
import Section from 'src/components/layouts/Section';
import ContactForm from 'src/components/common/ContactForm';
import CardContact from 'src/components/common/Card/CardContact';
import './Contact.scss';

const Contact = () => {
  return (
    <Landing>
      <Section title="CONTACT.title.1">
        <Col lg={6} md={6} sm={12}>
          <ContactForm />
        </Col>
        <Col lg={6} md={6} sm={12} className="contact-info">
          {ContactInfo?.map((item) => (
            <CardContact key={item.id} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </Col>
      </Section>
    </Landing>
  );
};

export default Contact;
