import Visual from '../components/Visual';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Work from '../components/Work';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Visual />
        <Intro />
        <Work />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  height: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
