import React, { useState } from "react";
import "./styles.css";

// components
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

// icons
import warningIcon from "../../assets/images/icons/warning.svg";

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: "",
      from: "",
      to: "",
    },
  ]);

  const weekDaysArray = [
    { value: "0", label: "Domingo" },
    { value: "1", label: "Segunda" },
    { value: "2", label: "Terça" },
    { value: "3", label: "Quarta" },
    { value: "4", label: "Quinta" },
    { value: "5", label: "Sexta" },
    { value: "6", label: "Sabádo" },
  ];

  const subjectsArray = [
    { value: "Artes", label: "Artes" },
    { value: "Inglẽs", label: "Inglẽs" },
    { value: "História", label: "História" },
    { value: "Fisíca", label: "Fisíca" },
    { value: "Quimíca", label: "Quimíca" },
    { value: "Português", label: "Português" },
    { value: "Geografia", label: "Geografia" },
    { value: "Matemática", label: "Matemática" },
    { value: "Biologia", label: "Biologia" },
  ];

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: "",
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />

          <Input name="avatar" label="Avatar" />

          <Input name="whatsapp" label="Whatsapp" />

          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select name="subject" label="Matéria" options={subjectsArray} />

          <Input name="cost" label="Custo da sua aula por hora" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis{" "}
            <button onClick={addNewScheduleItem} type="button">
              + Novo Horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => (
            <div key={scheduleItem.week_day} className="schedule-item">
              <Select
                name="week_day"
                label="Dia da semana"
                options={weekDaysArray}
              />

              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
