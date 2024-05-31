import styled from 'styled-components';

export const CarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: #fff;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 40px auto;
  justify-content: space-between;
`;

export const CarItem = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
`;