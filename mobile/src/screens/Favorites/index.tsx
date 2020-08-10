import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";

// styles
import { Container, Scroll } from "./styles";

// components
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadProffys() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const favoritedProffys = JSON.parse(res);

        setFavorites(favoritedProffysIds);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );
  return (
    <Container>
      <PageHeader title={"Meus proffys favoritos"} />

      <Scroll>
        {favorites.map((proffy: IProffy) => (
          <TeacherItem key={proffy.id} proffy={proffy} favorited />
        ))}
      </Scroll>
    </Container>
  );
}

export default Favorites;
