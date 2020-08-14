import React, { useState, useEffect } from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader/";
import TeacherItem, { ClassItem } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

export default function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  const [classes, setClasses] = useState<Array<ClassItem>>([]);

  useEffect(() => {
    api
      .get("/classes", {
        params: {
          week_day,
          subject,
          time,
        },
      })
      .then((response) => setClasses(response.data));
  }, [subject, week_day, time]);

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Eudacação Física", label: "Eudacação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
            onChange={(e) => setWeek_day(e.target.value)}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            onChange={(e) => setTime(e.target.value)}
          />
        </form>
      </PageHeader>

      <main>
        {classes.map((classItem) => (
          <TeacherItem key={classItem.id} classItem={classItem} />
        ))}
      </main>
    </div>
  );
}
