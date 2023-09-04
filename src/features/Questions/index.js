import React, { useState } from "react";

import "./index.scss";
import plusIcon from "../../assets/icons/plus.png";

const initialQuestions = [
  {
    id: 1,
    question: "Care este dresscode-ul evenimentului?",
    answer: "Unicul dresscode potrivit este dispoziția ta bună! 😎👌",
    expanded: false,
  },
  {
    id: 2,
    question: "Ce cadouri pot să aduc la întâmpinare?",
    answer:
      "Ne-am bucura dacă în locul tradiționalului buchet de flori, vei aduce o sticlă de vin preferat sau o carte care te-a marcat. 🍷📚",
    expanded: false,
  },
  {
    id: 3,
    question: 'Va fi păstrată tradiția "dezbrăcatul miresei"?',
    answer:
      'Având în vedere stilul modern al nunții și dorința noastră de a ne asigura că evenimentul este plin de distracție, am decis că nu vom păstra tradiția "dezbrăcatul miresei". 👰🏻‍♀️',
    expanded: false,
  },
  {
    id: 4,
    question: "Tăierea tortului semnifică încheierea evenimentului?",
    answer:
      "Momentul tăierii tortului nu marchează sfârșitul evenimentului. Dimpotrivă, adevărata distracție urmează după acest moment special, oferindu-ne oportunitatea de a ne bucura de fiecare secundă a petrecerii. 🎂",
    expanded: false,
  },
];

const Questions = () => {
  const [questions, setQuestions] = useState(initialQuestions);

  const handleClick = (id) => {
    const question = questions.find((question) => question.id === id);
    const newState = { ...question, expanded: !question.expanded };
    const newQuestions = questions.map((question) =>
      question.id === id ? newState : question
    );

    setQuestions(newQuestions);
  };

  return (
    <div className="questions_container">
      {questions.map((question) => {
        return (
          <div className="question_block" key={`${question.id}`}>
            <div className="question_section">
              <h4 className="question">{question.question}</h4>
              <div
                className={`expand_button ${
                  question.expanded ? "clicked" : ""
                }`}
                onClick={() => handleClick(question.id)}
              >
                <img src={plusIcon} alt="expand" className="plus_icon" />
              </div>
            </div>
            <div
              className={`answer_section ${
                question.expanded ? "selected" : ""
              }`}
            >
              <p>{question.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
