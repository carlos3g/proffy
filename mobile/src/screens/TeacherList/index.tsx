import React, { useState } from "react";

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

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
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
            <Input placeholder="Qual a matéria?" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Qual o dia?" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual o horário?" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <Scroll>
        <TeacherItem />
      </Scroll>
    </Container>
  );
}

export default TeacherList;
