import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  background: linear-gradient(
    45deg,
    rgba(47, 25, 126, 0.7) 0%,
    rgba(120, 16, 192, 0.8) 75%
  );
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  width: 1120px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 650px) {
    padding: 5px;
  }
`;
export const Infos = styled.section`
  width: 60%;
  display: grid;
  text-align: start;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const Name = styled.h1`
  font-size: 40px;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;
export const Especialization = styled.h4`
  color: lightgray;
  margin-bottom: 10px;
`;
export const Intro = styled.p`
  color: lightgray;
  text-align: justify;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  margin-top: 20px;
  font-weight: bold;
  justify-content: space-around;
  svg {
    font-size: 20px;
  }
`;
export const Logo = styled.section`
  width: 300px;
  height: 400px;
  display: flex;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgb(100, 100, 100) 0%,
    rgb(18, 18, 18) 70%
  );
  img {
    width: 280px;
    height: 280px;
  }
  @media (max-width: 900px) {
    width: 260px;
    height: 260px;
    img {
      width: 220px;
      height: 220px;
    }
  }
  @media (max-width: 650px) {
    width: 220px;
    height: 220px;
    img {
      width: 180px;
      height: 180px;
    }
  }
  @media (max-width: 400px) {
    width: 180px;
    height: 180px;
    img {
      width: 130px;
      height: 130px;
    }
  }
`;
