import Visual from '../components/Visual';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Work from '../components/Work';
import Company from '../components/Company';
import Skill from '../components/Skill';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Visual />
        <Intro />
        <Work />
        <Company />
        <Skill />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 720px;
  margin: 0 auto;
  & > section {
    margin-bottom: 70px;
    padding-bottom: 70px;
    border-bottom: 1px solid #e1e0e0;
  }
`;
