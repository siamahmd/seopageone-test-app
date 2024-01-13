import MainCard from "../components/MainCard";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  min-height: 92vh;
  border: 1px solid black;
  width: 150%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const CardWrapper = styled.div`
  background-color: rgb(229 231 235);
  margin: 5px;
`;
const CardHeading = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  &:before {
    content: "";
    width: 20px;
    height: 22px;
    position: absolute;
    left: 50px;
    background: red;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
const CardTitle = styled.h1`
  margin-left: 50px;
`;
const Card = styled.div`
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 92vh;
  background-color: rgb(229 231 235);
`;

export default function Home() {
  return (
    <Wrapper>
      <CardWrapper>
        <CardHeading>
          <CardTitle>Incomplete</CardTitle>
        </CardHeading>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <h1>To Do</h1>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}
