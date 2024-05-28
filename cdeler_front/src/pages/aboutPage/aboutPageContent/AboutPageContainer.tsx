import { AboutContainer, Content, Title } from "./AboutPageContainer.style";
import { texts } from '../../../assets/Dict/texts';

const { about } = texts;

const AboutContent = () =>{

    return (
        <AboutContainer>
          <Title>{about.aboutTitle}</Title>
          <Content>{about.aboutContent}</Content>
          <Title>{about.ourMision}</Title>
          <Content>{about.MisionContent}</Content>
          <Title>{about.newCarsTitle}</Title>
          <Content>{about.newCarsContent}</Content>
          <Title>{about.usedCarsTitle}</Title>
          <Content>{about.usedCarsContent}</Content>
        </AboutContainer>
      );

}

export default AboutContent;