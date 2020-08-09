import React from "react";

// interfaces
import { IPageHeaderProps } from "../../@types/types";

// navigation
import { useNavigation } from "@react-navigation/native";

// styles
import { Container, TopBar, BackButton, BackIcon, Logo, Title } from "./styles";

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>

        <Logo />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
