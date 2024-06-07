import { texts } from '../../../assets/Dict/texts';
import { SitemapContainer, Title, StyledList, ListItem, ItemTitle, ItemText } from './SitemapPageContent.style.tsx';

const SitemapContent = () => {
    const { title, content } = texts.Sitemap;
  
    return (
      <SitemapContainer>
      <Title>{title}</Title>
      <StyledList>
        {content.map(item => (
          <ListItem key={item.id}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemText>{item.text}</ItemText>
          </ListItem>
        ))}
      </StyledList>
    </SitemapContainer>
    );
  };
  
  export default SitemapContent;