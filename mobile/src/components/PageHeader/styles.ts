import styled from "styled-components/native";

// packages
import { BorderlessButton } from "react-native-gesture-handler";
// assets
import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";

export const Container = styled.View`
  padding: 40px;
  background-color: #8257e5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const BackIcon = styled.Image.attrs({
  source: backIcon,
  resizeMode: "contain",
})``;

export const Logo = styled.Image.attrs({
  source: logoImage,
  resizeMode: "contain",
})``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0 40px;
`;
