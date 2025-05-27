import React from 'react';
import { css } from '@emotion/react';

const Skill = () => {
  return (
    <section css={skill}>
      <h3>SKILL</h3>
      <ul>
        <li>
          <dl>
            <dt>Language</dt>
            <dd>HTML, JavaScript, TypeScript</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Framework</dt>
            <dd>React, Vue.js, Nuxt.js</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Styling</dt>
            <dd>CSS, SCSS, Tailwind, Bootstrap, emotion, styled-components</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Tools</dt>
            <dd>
              <p>Development: VsCode, IntelliJ IDEA, Git</p>
              <p>Design Tools: Figma, Photoshop, Illustrator</p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>
  );
};

export default Skill;

const skill = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  dl {
    display: flex;
    gap: 10px;
    dt {
      min-width: 90px;
    }
    dd {
      display: flex;
      flex-direction: column;
      gap: 5px;
      p {
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
