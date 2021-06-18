import { useState } from "react";
import Form from './Form'
import AnswersList from "./AnswersList";

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState([]);
  console.log(form)

  
    

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList answersList={form}/>}
      </section>
      <section className="main__form"><Form setForm={setForm} form={form} /></section>
    </main>
  );
}
