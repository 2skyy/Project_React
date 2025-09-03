import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  color: blue;
  font-size: 120px;
`;
const Description = styled.p`
  color: green;
  font-size: 50px;
`;
const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Description>This is a home Screen</Description>
    </Container>
  );
};

export default Home;
