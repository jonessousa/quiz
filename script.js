const perguntas = [
    {
        pergunta: "1. O que é HTML?",
        opcoes: ["A) Linguagem de Estilos", "B) Linguagem de Marcação", "C) Linguagem de Programação"],
        resposta: 1
    },
    {
        pergunta: "2. O que significa CSS?",
        opcoes: ["A) Computer Style Sheets", "B) Creative Style System", "C) Cascading Style Sheets"],
        resposta: 2
    },
    {
        pergunta: "3. Qual é a função do JavaScript?",
        opcoes: ["A) Estilizar páginas web", "B) Estruturar o conteúdo", "C) Tornar páginas web interativas"],
        resposta: 2
    },
    {
        pergunta: "4. O que é localStorage?",
        opcoes: ["A) Armazenamento de dados no servidor", "B) Armazenamento de dados no navegador", "C) Armazenamento de dados em arquivos"],
        resposta: 1
    },
    {
        pergunta: "5. Qual destes métodos é usado para selecionar um elemento pelo seu ID em JavaScript?",
        opcoes: ["A) document.getElementById()", "B) document.querySelector()", "C) document.select()"],
        resposta: 0
    },
    {
        pergunta: "6. O que faz o método push() em um array?",
        opcoes: ["A) Remove o último elemento", "B) Adiciona um novo elemento no final", "C) Ordena os elementos do array"],
        resposta: 1
    },
    {
        pergunta: "7. Em que ano foi criada a Lingugem de Programação JavaScript?",
        opcoes: ["A) 1991", "B) 1993", "C) 1995"],
        resposta: 2
    },
    {
        pergunta: "8. Quem foi o criador da linguagem de Programação JavaScript?",
        opcoes: ["A) Brendan Eich;", "B) Steven Collins;", "C) James Lincol;"],
        resposta: 0
    },
    {
        pergunta: "9. O que faz o método alert()?",
        opcoes: ["A) Exibe uma mensagem ao usuário", "B) Adiciona um comentário", "C) Redireciona para outra página"],
        resposta: 0
    },
    {
        pergunta: "10. O que é um objeto em JavaScript?",
        opcoes: ["A) Um tipo de variável", "B) Uma coleção de propriedades e métodos", "C) Um tipo de função"],
        resposta: 1
    }
];

function iniciarQuiz() {
    document.getElementById('quiz').style.display = 'block';
    document.querySelector('button').style.display = 'none';
    const formQuiz = document.getElementById('form-quiz');
    formQuiz.innerHTML = '';
    perguntas.forEach((pergunta, index) => {
        formQuiz.innerHTML += `<fieldset>
            <legend>${pergunta.pergunta}</legend>
            ${pergunta.opcoes.map((opcao, i) => `
                <label>
                    <input type="radio" name="pergunta${index}" value="${i}">
                    ${opcao}
                </label><br>
            `).join('')}
        </fieldset>`;
    });
    localStorage.setItem('quizIniciado', 'true');
}

function calcularResultado() {
    let score = 0;
    perguntas.forEach((pergunta, index) => {
        const respostaSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
        if (respostaSelecionada && parseInt(respostaSelecionada.value) === pergunta.resposta) {
            score++;
        }
    });
    document.getElementById('resultado-texto').innerText = `Você acertou ${score} de ${perguntas.length} perguntas.`;
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
}

function reiniciarQuiz() {
    document.getElementById('resultado').style.display = 'none';
    document.querySelector('button').style.display = 'inline';
    localStorage.removeItem('quizIniciado');
}
