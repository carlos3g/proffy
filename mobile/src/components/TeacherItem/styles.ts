import styled from "styled-components/native";

// interfaces
import { IFavoritedButtonProps } from "../../@types/types";

// packages
import { RectButton } from "react-native-gesture-handler";

// assets
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px 0 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: Archivo_700Bold;
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)<IFavoritedButtonProps>`
  background-color: ${(props) => (props.favorited ? "#e33d3d" : "#8257e5")};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;

export const FavoriteIcon = styled.Image.attrs({
  source: heartOutlineIcon,
  resizeMode: "contain",
})``;

export const UnfavoriteIcon = styled.Image.attrs({
  source: unfavoriteIcon,
  resizeMode: "contain",
})``;

export const WhatsappIcon = styled.Image.attrs({
  source: whatsappIcon,
  resizeMode: "contain",
})``;
