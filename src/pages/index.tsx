import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import {
  Img,
  Name,
  Logo,
  Intro,
  Infos,
  Content,
  Container,
  LinkProjects,
  Especialization,
} from './styles';

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
          <Img
            width={'230px'}
            height={'230px'}
            alt={'My avatar'}
            src={'/images/avatar.png'}
          />
        </Logo>
      </Content>
    </Container>
  );
}
