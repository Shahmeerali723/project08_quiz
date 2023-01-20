#! /usr/bin/env node
import inquirer from 'inquirer';
console.log((`

        _   _   _   _   _   _   _     _   _     _   _   _   _   _   _  
        / \ / \ / \ / \ / \ / \ / \   / \ / \   / \ / \ / \ / \ / \ / \ 
       ( D | E | V | E | L | O | P ) ( B | Y ) ( S | E | N | S | E | I )
        \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ 


        `));
const quizInput = [{ name: 'question', type: "input" }, { name: 'a', type: "input" }, { name: 'b', type: "input" }, { name: 'c', type: "input" }, { name: 'd', type: "input" }, { name: 'correct', type: "checkbox", choices: ['a', 'b', 'c', 'd'], default: 'c' }];
let questionList = [];
async function Quiz() {
    let studentMarks = 0;
    let totalQuestions = Number((await inquirer.prompt({ name: "TotalQuestions", type: "number" })).TotalQuestions);
    for (let i = 0; i < totalQuestions; i++) {
        let tempQuestion = (await inquirer.prompt(quizInput).then((answer) => { return answer; }));
        /*console.log(tempQuestion);
        questionList[i].question=tempQuestion.question;
        questionList[i].a=tempQuestion.a;
        questionList[i].b=tempQuestion.b;
        questionList[i].c=tempQuestion.c;
        questionList[i].d=tempQuestion.d;
        questionList[i].correct=tempQuestion.correct;*/
        questionList.push(tempQuestion);
        console.clear();
    }
    console.clear();
    for (let i = 0; i < questionList.length; i++) {
        console.log(`Question : ${questionList[i].question}\n`);
        console.log(`${questionList[i].a}\n${questionList[i].b}\n${questionList[i].c}\n${questionList[i].d}\n`);
        let studentResponse = (await inquirer.prompt({ name: "answers", type: "checkbox", choices: ['a', 'b', 'c', 'd'] })).answers;
        studentResponse.sort();
        questionList[i].correct.sort();
        if (JSON.stringify(studentResponse) === JSON.stringify(questionList[i].correct)) {
            studentMarks++;
        }
        console.clear();
    }
    console.log(`You gained ${studentMarks}/${questionList.length}, ${(studentMarks / questionList.length) * 100}%\n`);
}
Quiz();
