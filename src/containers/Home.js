import Todos from "../components/Todos";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  min-height: 92vh;
  border: 1px solid black;
  width: 150%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Card = styled.div`
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 92vh;
`;
const CardWrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <CardWrapper>
        <h1>Incomplete</h1>
        <Card>
          <Todos></Todos>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <Todos></Todos>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <Todos></Todos>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <Todos></Todos>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <Todos></Todos>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <Todos></Todos>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}
