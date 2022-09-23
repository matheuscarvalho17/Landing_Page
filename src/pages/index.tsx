import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import {
  Name,
  Logo,
  Intro,
  Infos,
  Content,
  Container,
  LinkProjects,
  Especialization,
} from './style';

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>{`Hi, I'm Matheus Carvalho`}</Name>
          <Especialization>{'FrontEnd & Mobile Developer'}</Especialization>
          <Intro>
            {`Graduated in Computer Engineering at the Presidente Antônio Carlos University,
            I currently work as a Front-End developer where I am responsible for developing and
            maintaining the company's mobile applications, using various technologies in the
            market such as: Java, Typescript, React-Native and Next.JS.`}
          </Intro>
          <Link href="projects">
            <LinkProjects>
              {'PROJECTS'}
              <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <img src="/images/avatar.png" alt={'My avatar'}></img>
        </Logo>
      </Content>
    </Container>
  );
}
