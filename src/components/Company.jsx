import React from 'react';
import { css } from '@emotion/react';

const Company = () => {
  return (
    <section css={CompanyContainer}>
      <h3>Company</h3>
      <li css={list}>
        <h4 className='title'>팀벨</h4>
        <p className='period'>2022.09 ~ 2025.02 (2년 6개월)</p>
        <ul css={desc}>
          <li>
            시스템의 구축과 운영 전반을 담당하였으며, 다양한 프레임워크 환경에서
            유연하게 대응하며 개발 및 유지보수 업무를 수행하였습니다.
          </li>
          <li>
            사내 프로젝트의 랜딩 페이지를 Nuxt 기반으로 구축하고, 반응형
            디자인을 통해 사용자 경험을 향상시켰습니다.
          </li>
        </ul>
      </li>
      <li css={list}>
        <h4 className='title'>오픈필드</h4>
        <p className='period'>2020.09 ~ 2022.01 (1년 5개월)</p>
        <ul css={desc}>
          <li>
            공공기관 웹사이트 리뉴얼 프로젝트에서 퍼블리싱을 담당하였으며, 웹
            접근성(WA) 가이드라인을 준수하여 다양한 사용자가 불편 없이 이용할 수
            있도록 구현하였습니다.
          </li>
          <li>
            HTML5와 CSS3 기반으로 시맨틱 마크업을 구현하고, 다양한 디바이스
            환경에 대응하는 반응형 웹 페이지를 설계 및 구축하였습니다.
          </li>
        </ul>
      </li>
      <li css={list}>
        <h4 className='title'>더피프티원</h4>
        <p className='period'>2017.04 ~ 2018.07 (1년 4개월)</p>
        <ul css={desc}>
          <li>
            HTML, CSS, jQuery를 기반으로 클라이언트 웹사이트의 운영 및
            유지보수를 담당하였으며, 마크업 구조 개선과 인터랙션 기능 수정 등
            실시간 대응 업무를 수행하였습니다.
          </li>
        </ul>
      </li>
    </section>
  );
};

export default Company;

const CompanyContainer = css`
  padding: 20px;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e1e0e0;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
  }
  .period {
    font-size: 12px;
    color: #999;
  }
  .content {
    font-size: 14px;
    font-weight: 500;
  }
`;

const desc = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  li {
    list-style: disc;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 20px;
  }
`;
