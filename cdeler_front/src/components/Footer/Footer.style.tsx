import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 20px;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  & img {
    margin-bottom: 10px;
    height: 120px;
    width: auto;
  }

  & ul {
    list-style: none;
    padding: 0;
    text-align: left;
    line-height: 22.5px;
  }

  & ul li a {
    color: white;
    text-decoration: none;
  }
`;

export const ImgSide = styled(Side)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & img {
    margin-bottom: 10px;
    height: 120px;
    width: auto;
  }
`;