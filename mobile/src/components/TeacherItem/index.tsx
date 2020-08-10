import React, { useState } from "react";

import { Linking } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

// interfaces
import { IProffy, ITeacherItemProps } from "../../@types/types";

// styles
import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ButtonText,
  FavoriteIcon,
  UnfavoriteIcon,
  WhatsappIcon,
} from "./styles";

const TeacherItem: React.FC<IProffy> = ({ proffy, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post("connections", {
      user_id: proffy.id,
    });

    Linking.openURL(`whatsapp://send?phone=${proffy.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (proffyItem: ITeacherItemProps) => {
          return proffyItem.id === proffy.id;
        }
      );

      setIsFavorited(false);
      favoritesArray.splice(favoriteIndex, 1);
    } else {
      favoritesArray.push(proffy);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: proffy.avatar }} />

        <ProfileInfo>
          <Name>{proffy.name}</Name>
          <Subject>{proffy.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{proffy.bio}</Bio>

      <Footer>
        <Price>
          Preço/Hora {"   "}
          <PriceValue>R$ {proffy.cost}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton
            onPress={handleToggleFavorite}
            favorited={isFavorited ? true : false}
          >
            {isFavorited ? <UnfavoriteIcon /> : <FavoriteIcon />}
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <WhatsappIcon />
            <ButtonText>Entrar em Contato</ButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
