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
`;
const CardHeadingFirst = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  &:before {
    content: "";
    width: 20px;
    height: 22px;
    position: absolute;
    left: 20px;
    background-color: rgb(185 28 28);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
const CardHeadingSecond = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  &:before {
    content: "";
    width: 20px;
    height: 22px;
    position: absolute;
    left: 20px;
    background-color: rgb(14 165 233);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;

const CardHeadingThird = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  &:before {
    content: "";
    width: 20px;
    height: 22px;
    position: absolute;
    left: 20px;
    background-color: rgb(251 191 36);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
const CardTitleWothColor = styled.h1`
  margin-left: 50px;
  font-weight: 600;
`;

const CardTitle = styled.h1`
  margin-left: 10px;
  font-weight: 600;
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
        <CardHeadingFirst>
          <CardTitleWothColor>Incomplete</CardTitleWothColor>
        </CardHeadingFirst>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <CardHeadingSecond>
          <CardTitleWothColor>To Do</CardTitleWothColor>
        </CardHeadingSecond>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <CardHeadingThird>
          <CardTitleWothColor>Doing</CardTitleWothColor>
        </CardHeadingThird>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <CardHeading>
          <CardTitle>Under Review</CardTitle>
        </CardHeading>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <CardHeading>
          <CardTitle>Completed</CardTitle>
        </CardHeading>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <CardHeading>
          <CardTitle>Over</CardTitle>
        </CardHeading>
        <Card>
          <MainCard></MainCard>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}
