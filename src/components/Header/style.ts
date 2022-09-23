import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;
export const Content = styled.div`
  width: 1120px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-size: 30px;
`;
export const NavLinks = styled.nav<{ sidebar: boolean }>`
  display: flex;
  gap: 20px;
  @media (max-width: 650px) {
    gap: 0;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    position: fixed;
    transition: 0.5s;
    flex-direction: column;
    background-color: #161616;
    right: ${(props) => (props.sidebar ? '0' : '-100%')};
    a {
      display: flex;
      margin-top: 100px;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
export const Anchor = styled.div`
  height: 100px;
  font-size: 20px;
  transition: 0.3s;
  &.active {
    background-color: black;
  }
  @media (min-width: 650px) {
    display: flex;
    padding: 0 10px;
    align-items: center;
  }
`;
export const Menu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 650px) {
    display: flex;
  }
`;
export const CloseSidebar = styled.div`
  top: 35px;
  right: 15 px;
  display: none;
  font-size: 30px;
  position: absolute;
  cursor: pointer;
  @media (max-width: 650px) {
    display: flex;
  }
`;
export const ContentTitle = styled.div`
  text-align: end;
`;
export const SubTitle = styled.span``;
