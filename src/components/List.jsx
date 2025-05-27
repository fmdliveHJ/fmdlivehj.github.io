import React from 'react';
import { css } from '@emotion/react';
import { workList } from '../data/worklist';

const List = () => {
  return (
    <>
      {workList.map((work, index) => (
        <li key={index} css={list}>
          <h4 className='title'>{work.title}</h4>
          <p className='period'>{work.period}</p>
          <p className='content'>{work.content}</p>
          <div css={desc}>
            <dl>
              <dt>기여도 </dt>
              <dd>{work.contribution}</dd>
            </dl>
            <dl>
              <dt>주요 역할</dt>
              <dd>{work.role}</dd>
            </dl>
            <dl className='details'>
              <dt>수행 내용</dt>
              <dd>
                <ul>
                  {work.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </dd>
            </dl>
            <dl className='process'>
              <dt>기여 및 성과</dt>
              <dd>
                <ul>
                  <li>{work.process}</li>
                </ul>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </>
  );
};

export default List;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 50px;
  padding-bottom: 50px;
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
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  dl {
    display: flex;
    gap: 10px;
  }
  dt {
    min-width: 80px;
  }
  dd {
    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
      li {
        list-style: disc;
      }
    }
  }
  .details {
    dd {
      margin-left: 20px;
    }
  }
  .process {
    margin-top: 10px;
    dd {
      margin-left: 20px;
    }
  }
`;
