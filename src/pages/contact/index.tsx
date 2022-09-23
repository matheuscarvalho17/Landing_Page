import React from 'react';
import ItemContact from '../../components/ItemContact';
import { Container, Content } from '../../styles/contact.style';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const email: string = 'matheuslopescarvalho@hotmail.com.br';

  function copyEmail() {
    navigator.clipboard.writeText(email);
    alert('Copied the text: ' + email);
  }

  return (
    <Container>
      <Content>
        <ItemContact
          id={'linkedin'}
          IconFa={FaLinkedin}
          LinkContact={
            'https://www.linkedin.com/in/matheus-carvalho-130924187/'
          }
        />
        <ItemContact
          id={'instagram'}
          IconFa={FaInstagram}
          LinkContact={'https://www.instagram.com/_matheuscarvalho_17'}
        />
        <ItemContact
          isEmail
          onClick={copyEmail}
          id={'email'}
          IconFa={FaEnvelope}
          LinkContact={email}
        />
      </Content>
    </Container>
  );
}
