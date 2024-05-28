import styled from "styled-components";

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 40px auto;
  font-size: 1.2rem;
  line-height: 24px;
`;

export const Title = styled.h1`
  color: #e53935;
  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
`;

export const ItemTitle = styled.h2`
  color: #e53935;
`;

export const ItemText = styled.p`
  margin: 0;
`;