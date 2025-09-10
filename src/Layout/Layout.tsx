//MainRoute 페이지에 공통으로 적용될 화면 구성
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
  width: 100%;
`;
const MenuBox = styled.div`
  background-color: #acbe35;
  display: flex;
  flex-direction: column;
  align-itmes: center;
  gap: 10px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: blueviolet;
  cursor: pointer;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
`;

const Page = styled.div``;

const Layout = () => {
  return (
    <Container>
      <MenuBox>
        <Menu>Menu1</Menu>
        <Menu>Menu2</Menu>
        <Menu>Menu3</Menu>
        <Menu>Menu4</Menu>
        <Menu>Menu5</Menu>
        <Menu>Menu6</Menu>
        <Footer>
          <Menu>Setting</Menu>
          <Menu>Logout</Menu>
        </Footer>
      </MenuBox>
      <Page>
        <Outlet />
      </Page>
    </Container>
  );
};
export default Layout;
