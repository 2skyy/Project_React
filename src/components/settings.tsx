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

const Settings = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Description>This is a Settings Screen</Description>
    </Container>
  );
};

export default Settings;
