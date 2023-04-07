import React, { useState } from 'react';

const Quiz = () => {
  // State para controlar a pergunta atual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State para armazenar a opção selecionada pelo usuário
  const [selectedOption, setSelectedOption] = useState(null);
  // State para armazenar a quantidade de respostas corretas
  const [correctAnswers, setCorrectAnswers] = useState(0);


  // Array de objetos que contém as perguntas, opções e respostas
  const questions = [
    {
      question: 'Qual é o objetivo do React.js? ',
      options: ['a. Gerenciar o estado de uma aplicação', 'b. Gerenciar as rotas da aplicação',
       'c. Realizar consultas a um banco de dados', 'd. Criar servidores web'],
      answer: 'a. Gerenciar o estado de uma aplicação',
    },
    {
      question: 'O que é JSX no React.js? ',
      options: ['a. Uma linguagem de programação', 'b. Uma biblioteca de gerenciamento de estado',
       'c. Uma sintaxe de marcação', 'd. Uma técnica de otimização de desempenho'],
      answer: 'c. Uma sintaxe de marcação',
    },
    {
      question: 'Qual das alternativas descreve corretamente o que é um Hook no React.js? ',
      options: ['a. Uma função que permite o compartilhamento de estados entre componentes', 'b. Uma forma de manipular o DOM diretamente dentro de um componente',
       'c. Uma biblioteca externa utilizada para estilização de componentes', 'd. Uma estrutura de dados utilizada para armazenar informações do usuário'],
      answer: 'a. Uma função que permite o compartilhamento de estados entre componentes',
    },
  ];

  // Função para atualizar a opção selecionada pelo usuário
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  
  // Função para avançar para a próxima pergunta e verificar se a resposta do usuário está correta
  const handleNextQuestion = () => {
    // Se o usuário não selecionou nenhuma opção, retorna sem fazer nada
    if (selectedOption === null) {
      return;
    }

    // Se a opção selecionada pelo usuário é igual à resposta correta, incrementa o contador de respostas corretas
    if (selectedOption === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    // Reinicia a opção selecionada pelo usuário para null e avança para a próxima pergunta
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  // Função para reiniciar o quiz
  const handleRestartQuiz = () => {
    // Reinicia a pergunta atual, a opção selecionada pelo usuário e o contador de respostas corretas
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCorrectAnswers(0);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <div className="question-container">
          <h2 className="question-text">{questions[currentQuestion].question}</h2>
          <ul className="options-list">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="option-item">
                <label className="option-label">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <span className="option-text">{option.slice(2)}</span>
                </label>
              </li>
            ))}
          </ul>
          <button className="next-button" onClick={handleNextQuestion} disabled={selectedOption === null}>
            Próxima pergunta
          </button>
        </div>
      ) : (
        <div className="results-container">
          <h2 className="results-title">Quiz finalizado!</h2>
          <p className="results-text">Você acertou {correctAnswers} de {questions.length} perguntas.</p>
          <p className="results-text">Respostas corretas:</p>
          <ul className="results-list">
            {questions.map((question, index) => (
              <li key={index} className="result-item">
                <span className="result-question">{question.question}</span>
                <span className="result-answer">Resposta: {question.answer}</span>
              </li>
            ))}
          </ul>
          <button className="restart-button" onClick={handleRestartQuiz}>Reiniciar quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
