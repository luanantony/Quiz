
# Quiz de React.js

Este é um projeto simples de quiz criado em React.js usando o hook `useState` para controlar o estado dos componentes.

O objetivo é testar o conhecimento do usuário em relação aos conceitos básicos de React.js. O quiz possui três perguntas, com quatro opções cada. O usuário deve selecionar uma opção e clicar no botão "Próxima pergunta" para avançar para a próxima pergunta.

Ao final do quiz, é exibido o número de respostas corretas e a lista de perguntas com as respostas corretas. O usuário pode reiniciar o quiz clicando no botão "Reiniciar quiz".

## Como usar

1.  Clone o repositório:
    
    bashCopy code
    
    `git clone https://github.com/seu-usuario/react-quiz.git` 
    
2.  Instale as dependências:
    
    Copy code
    
    `npm install` 
    
3.  Inicie a aplicação:
    
    sqlCopy code
    
    `npm start` 
    

## Estrutura do projeto

O projeto é composto por um único componente chamado `Quiz`.

### Variáveis de estado

-   `currentQuestion`: Controla a pergunta atual exibida na tela.
-   `selectedOption`: Armazena a opção selecionada pelo usuário.
-   `correctAnswers`: Armazena a quantidade de respostas corretas.

### Array de perguntas

O array `questions` contém três objetos, cada um representando uma pergunta, as opções de resposta e a resposta correta.

### Funções

-   `handleOptionSelect(option)`: Atualiza a opção selecionada pelo usuário.
-   `handleNextQuestion()`: Avança para a próxima pergunta e verifica se a resposta do usuário está correta.
-   `handleRestartQuiz()`: Reinicia o quiz.

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request se encontrar algum problema ou tiver alguma ideia de melhoria para o projeto.