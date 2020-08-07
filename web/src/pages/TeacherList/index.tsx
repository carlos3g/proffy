import React from "react";
import "./styles.css";

// componentes
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Inglẽs", label: "Inglẽs" },
              { value: "História", label: "História" },
              { value: "Fisíca", label: "Fisíca" },
              { value: "Quimíca", label: "Quimíca" },
              { value: "Português", label: "Português" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Biologia", label: "Biologia" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sabádo" },
            ]}
          />

          <Input name="time" label="Horário" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem></TeacherItem>
      </main>
    </div>
  );
}

export default TeacherList;
