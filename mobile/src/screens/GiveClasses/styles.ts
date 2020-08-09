import styled from "styled-components/native";

// packages
import { RectButton } from "react-native-gesture-handler";

// images
import giveClassesBgImg from "../../assets/images/give-classes-background.png";

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  source: giveClassesBgImg,
  resizeMode: "contain",
})`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: Poppins_400Regular;
  max-width: 240px;
`;

export const Button = styled(RectButton)`
  margin: 40px 0 40px 0;
  background-color: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text``;
