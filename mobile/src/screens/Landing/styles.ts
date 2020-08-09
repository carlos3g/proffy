import styled from "styled-components/native";

// packages
import { RectButton } from "react-native-gesture-handler";

// types
import { IButtonProps } from "../../@types/types";

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  color: #fff;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<IButtonProps>`
  background-color: ${(props) => (props.primary ? "#9871f5" : "#04d361")};
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonImg = styled.Image``;

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const Image = styled.Image``;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
