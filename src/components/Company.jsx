import React from 'react';
import { css } from '@emotion/react';

const Company = () => {
  return (
    <section css={CompanyContainer}>
      <h3>Company</h3>
      <li css={list}>
        <h4 className='title'>팀벨</h4>
        <p className='period'>2022.09 ~ 2025.02</p>
        <ul>
          <li>내용</li>
          <li>내용</li>
        </ul>
      </li>
      <li css={list}>
        <h4 className='title'>오픈필드</h4>
        <p className='period'>2020.09 ~ 2022.01</p>
        <ul css={desc}>
          <li>내용</li>
          <li>내용</li>
        </ul>
      </li>
      <li css={list}>
        <h4 className='title'>더피프티원</h4>
        <p className='period'>2017.04 ~ 2018.07</p>
        <ul css={desc}>
          <li>내용</li>
          <li>내용</li>
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
`;
