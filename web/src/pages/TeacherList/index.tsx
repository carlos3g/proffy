import React, { useState, FormEvent } from "react";
import "./styles.css";

// packages
import api from "../../services/api";

// componentes
import PageHeader from "../../components/PageHeader";
import TeacherItem, { IProffy } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [proffys, setPoffys] = useState([]);

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

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const res = await api.get("classes", {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setPoffys(res.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={subjectsArray}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={weekDaysArray}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
          />

          <Input
            name="time"
            label="Horário"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {proffys.map((proffy: IProffy) => {
          return <TeacherItem key={proffy.id} proffy={proffy} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
