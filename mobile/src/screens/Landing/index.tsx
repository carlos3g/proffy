import React, { useState, useEffect } from "react";

// packages
import api from "../../services/api";

// navigation
import { useNavigation } from "@react-navigation/native";

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
  const [totalConnections, setTotalConnections] = useState(0);
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get("connections").then((res) => {
      const { total } = res.data;
      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToGiveClasses() {
    navigate("GiveClasses");
  }

  function handleNavigateToStudy() {
    navigate("Study");
  }

  return (
    <Container>
      <Banner source={LandingImg} />
      <Title>
        Seja Bem-vindo, {"\n"}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button primary onPress={handleNavigateToStudy}>
          <ButtonImg source={StudyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress={handleNavigateToGiveClasses}>
          <ButtonImg source={GiveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{" "}
        <Image source={HeartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;
