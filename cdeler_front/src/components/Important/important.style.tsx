import styled from "styled-components";
import bg1 from '../../png/bg1.jpg';
import bg2 from '../../png/bg2.jpg';

export const ImportantArticle2 = styled.div`
  color: #fff;
  background: url(${bg1}) no-repeat center center;
  background-size: cover;
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
`;

export const ImportantArticle1 = styled.div`
  color: #fff;
  background: url(${bg2}) no-repeat center center;
  background-size: cover;
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
`;

export const ImportantContainer = styled.div`
  color: #fff;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
`;

export const ImportantTitle = styled.h1`
  font-size: 2.5em;
  color: #ff0000;
  margin-bottom: 20px;
`;

export const ImportantText = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
`;