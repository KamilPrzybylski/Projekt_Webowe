import { FAQContainer, Title, Question, Answer, FAQItem } from './faqPageContent.style';
import { texts } from '../../../assets/Dict/texts';

const FAQContent = () => {

    const { title, questions } = texts.faq;
  
    return (
      <FAQContainer>
        <Title>{title}</Title>
        {questions.map((faq, index) => (
          <FAQItem key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    );
  };
  
  export default FAQContent;