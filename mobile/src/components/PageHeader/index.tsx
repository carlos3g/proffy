import React from "react";

// interfaces
import { IPageHeaderProps } from "../../@types/types";

// navigation
import { useNavigation } from "@react-navigation/native";

// styles
import {
  Container,
  TopBar,
  BackButton,
  BackIcon,
  Logo,
  Title,
  Header,
} from "./styles";

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
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

      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
