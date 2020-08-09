import React from "react";

// styled
import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonImg,
  ButtonText,
  TotalConnections,
  Image,
} from "./styles";

// assets
import LandingImg from "../../assets/images/landing.png";

// icons
import StudyIcon from "../../assets/images/icons/study.png";
import GiveClassesIcon from "../../assets/images/icons/give-classes.png";
import HeartIcon from "../../assets/images/icons/heart.png";

function Landing() {
  return (
    <Container>
      <Banner source={LandingImg} />
      <Title>
        Seja Bem-vindo, {"\n"}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button primary>
          <ButtonImg source={StudyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button>
          <ButtonImg source={GiveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de 200 conexões já realizadas <Image source={HeartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;
