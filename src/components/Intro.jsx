import React from 'react';
import { css } from '@emotion/react';

const Intro = () => {
  return (
    <section css={IntroContainer}>
      <h3>Intro</h3>
      <p>
        다양한 디지털 에이전시와 사내 개발 환경에서 여러 웹 프로젝트를 경험하며
        웹사이트를 구현하였습니다. <br />
        마크업 기반의 화면 구현 경험을 토대로, UI/UX 흐름을 고려한 구조 설계와
        컴포넌트 기반의 개발에 집중해왔습니다.
        <br />
        팀벨에서는 React, Vue.js, Nuxt.js를 활용한 랜딩 페이지와 UI 컴포넌트
        개발을 담당했으며, 오픈필드에서는 공공기관 리뉴얼 프로젝트에서
        퍼블리싱을 맡았습니다. 이 과정에서 재사용 가능한 코드와 모듈화의
        중요성을 체감했고, 효율적인 컴포넌트 설계를 위해 지속적으로 고민하며
        적용했습니다.
        <br />
        <br />
        다양한 프로젝트를 통해 프론트엔드 개발 역량을 쌓아왔으며, 화면을
        컴포넌트 단위로 분리해 개발 효율성과 유지보수성을 높이는 데
        주력했습니다. React 기반 프로젝트에서 빠르게 적응해 TypeScript를
        학습하고 적용하였으며, Vue 및 Nuxt 기반의 프로젝트에서도 안정적으로
        기여한 경험이 있습니다. <br />
        특히 사용자 경험에 대한 이해를 바탕으로, 단순한 화면 구현을 넘어
        사용자의 행동 흐름과 니즈를 고려한 UI 설계에 집중해왔습니다. 이를 통해
        더 직관적이고 일관된 인터페이스를 구현하고자 노력했습니다. 주로 화면
        구현을 담당하면서 디자이너, 기획자, 백엔드 개발자 등 다양한 구성원과의
        협업을 통해 완성도 높은 결과물을 도출해냈으며, 원활한 커뮤니케이션으로
        프로젝트 퍼포먼스를 높이기 위해 힘썼습니다.
      </p>
    </section>
  );
};

export default Intro;

const IntroContainer = css`
  padding: 20px;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 1.7;
    letter-spacing: -0.04em;
  }
`;
