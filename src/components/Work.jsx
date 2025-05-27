import React from 'react';
import { css } from '@emotion/react';
import List from './List';

const Work = () => {
  return (
    <section css={WorkContainer}>
      <h3>Work Experience</h3>
      <ul>
        <List />
      </ul>
    </section>
  );
};

const WorkContainer = css`
  padding: 20px;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;
export default Work;
