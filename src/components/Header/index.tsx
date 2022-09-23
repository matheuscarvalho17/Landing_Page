import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Menu,
  Title,
  Anchor,
  Content,
  NavLinks,
  SubTitle,
  Container,
  ContentTitle,
} from './style';

export function Header() {
  const { asPath } = useRouter();
  const [sidebar, setSidebar] = useState<boolean>(false);

  function showSiderbar() {
    setSidebar(!sidebar);
  }
  function activeLink(path: string) {
    return asPath === `/${path}` ? `active` : '';
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>{'Matheus Carvalho'}</Title>
          <SubTitle>{'Personal Landing Page'}</SubTitle>
        </ContentTitle>
        <Menu>
          {sidebar ? (
            <FaTimes onClick={showSiderbar} />
          ) : (
            <FaBars onClick={showSiderbar} />
          )}
        </Menu>
        <NavLinks sidebar={sidebar}>
          <Link href="/">
            <Anchor className={activeLink('')} onClick={showSiderbar}>
              {'Home'}
            </Anchor>
          </Link>
          <Link href="projects">
            <Anchor className={activeLink('projects')} onClick={showSiderbar}>
              {'Projects'}
            </Anchor>
          </Link>
          <Link href="contact">
            <Anchor className={activeLink('contact')} onClick={showSiderbar}>
              {'Contact'}
            </Anchor>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  );
}
