import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  width: 1120px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    padding: 5px;
  }
  @media (max-width: 760px) {
    justify-content: space-around;
    flex-direction: column-reverse;
  }
`;
export const Infos = styled.div`
  width: 50%;
  display: grid;
  text-align: start;
  @media (max-width: 760px) {
    width: 90%;
  }
`;
export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;
export const Especialization = styled.span`
  color: lightgray;
  margin-bottom: 10px;
`;
export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  @media (max-width: 760px) {
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
export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25rem;
    height: 25rem;
  }
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;
export const Img = styled.img``;
