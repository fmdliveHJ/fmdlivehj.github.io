import React from 'react';
import { css } from '@emotion/react';
import List from './List';

const Work = () => {
  return (
    <div css={WorkContainer}>
      <h3>Work Experience</h3>
      <ul>
        <List />
      </ul>
    </div>
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
