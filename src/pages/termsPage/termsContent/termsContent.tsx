import { texts } from '../../../assets/Dict/texts';
import { TermsContainer, Title, StyledList, ListItem, ItemTitle, ItemText } from './termsContent.style';

const TermsContent = () => {
    const { title, content } = texts.terms;
  
    return (
      <TermsContainer>
      <Title>{title}</Title>
      <StyledList>
        {content.map(item => (
          <ListItem key={item.id}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemText>{item.text}</ItemText>
          </ListItem>
        ))}
      </StyledList>
    </TermsContainer>
    );
  };
  
  export default TermsContent;