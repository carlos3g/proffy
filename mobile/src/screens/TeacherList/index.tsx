import React, { useState } from "react";

// packages
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";

// interfaces
import { IProffy, ITeacherItemProps } from "../../@types/types";

// styles
import {
  Container,
  Scroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  FilterButton,
  FilterIcon,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

// components
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [proffys, setPoffys] = useState([]);

  function loadProffys() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const favoritedProffys = JSON.parse(res);
        const favoritedProffysIds = favoritedProffys.map(
          (proffy: IProffy) => proffy.id
        );
        setFavorites(favoritedProffysIds);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFilterSubmit() {
    loadProffys();

    const res = await api.get("classes", {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    handleToggleFiltersVisible();
    setPoffys(res.data);
  }

  return (
    <Container>
      <PageHeader
        title={"Proffys disponíveis"}
        headerRight={
          <FilterButton onPress={handleToggleFiltersVisible}>
            <FilterIcon />
          </FilterButton>
        }
      >
        {isFilterVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual o horário?"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFilterSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <Scroll>
        {proffys.map((proffy: ITeacherItemProps) => (
          <TeacherItem
            key={proffy.id}
            proffy={proffy}
            favorited={favorites.includes(proffy.id)}
          />
        ))}
      </Scroll>
    </Container>
  );
}

export default TeacherList;
