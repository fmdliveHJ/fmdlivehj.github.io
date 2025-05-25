import React from 'react';
import styled from '@emotion/styled';
import Profile from '../assets/images/profile.jpg';
const Visual = () => {
  return (
    <VisualContainer>
      <h2>사용자 경험에 강한 개발자 정현진</h2>
      <VisualBox>
        <VisualPic>
          <img src={Profile} alt='profile' />
        </VisualPic>
        <VisualDesc>
          <h2>Contact</h2>
          <dl>
            <dt>Phone</dt>
            <dd>010-4725-0335</dd>
          </dl>
          <dl>
            <dt>Email</dt>
            <dd>gdalove@naver.com</dd>
          </dl>
          <dl>
            <dt>Github</dt>
            <dd>
              <a target='_blank' href='https://github.com/fmdliveHJ'>
                https://github.com/fmdliveHJ
              </a>
            </dd>
          </dl>
          <dl>
            <dt>Blog</dt>
            <dd>
              <a target='_blank' href='http://blog-omega-three-92.vercel.app/'>
                https://blog-omega-three-92.vercel.app/
              </a>
            </dd>
          </dl>
        </VisualDesc>
      </VisualBox>
    </VisualContainer>
  );
};

export default Visual;

const VisualContainer = styled.div`
  margin-top: 100px;
  & > h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;

const VisualBox = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const VisualPic = styled.div`
  min-width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const VisualDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  dl {
    display: flex;
    gap: 10px;
    dt {
      min-width: 60px;
    }
  }
`;
