const questions = [
    {
        'que': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'HyperLinks and Text Markup Language',
        'c': 'Home Tool Markup Language',
        'd': 'Hyper Tool Markup Language',
        'correct': 'a',
    },

    {
        'que': 'What does Css stand for?',
         'a': 'Colorful Styling Style',
         'b': 'Cascading Style Sheet',
         'c': 'Colorful Styling Sheet',
         'd': 'Color Styling Stlye',
         'correct': 'b',
    },

    {
        'que': 'How do you write "Hello World" in an alert box in Javascript?',
        'a': 'msg("Hello Wolrd");',
        'b': 'alert("Hello World");',
        'c': 'msgBox("Hello World");',
        'd': 'alertBox("Hello World");',
        'correct': 'b',
    },

    {
        'que': 'How to create a function in Javascript?',
        'a': 'function myFunction()',
        'b': 'function:myFunction()',
        'c': 'function=myFunction()',
        'd': 'fucntion::myFunction()',
        'correct': 'a',

    },

    {
        'que': 'Which operator is used to assign a value to a variable?',
        'a': 'X',
        'b': '-',
        'c': '*',
        'd': '=',
        'correct': 'd',
    },

]

let index = 0;
let total = questions.length;
let right = 0 , wrong = 0;
const quesBox = document.getElementById("question-Box");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () =>{
    if(index === total)
    {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
    (input) =>{
        if(input.checked){
            answer =  input.value;
        }
    }
    )
    return answer;
}

const reset = () =>{
        optionInputs.forEach(
            (input)=>{
                input.checked = false
            }
        )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}
    loadQuestion();