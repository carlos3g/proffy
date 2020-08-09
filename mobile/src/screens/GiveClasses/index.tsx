import React from "react";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ImageBackground,
  Title,
  Description,
  Button,
  ButtonText,
} from "./styles";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <ImageBackground>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </ImageBackground>

      <Button onPress={handleGoBack}>
        <ButtonText>Tudo Bem</ButtonText>
      </Button>
    </Container>
  );
}

export default GiveClasses;
