let nico = '';

function getCategories() {
    const url = 'https://opentdb.com/api_category.php';
    fetch(url)
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories))
}


function getQuestions() {
    const totalQuestions = document.getElementById('totalQuestions').value;
    const category = document.getElementById('select-category').value;
    const difficulty = document.getElementById('select-difficulty').value;
    const typeQuestions = document.getElementById('select-type').value;
    nico = typeQuestions;
    fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${difficulty}&type=${typeQuestions}`)
        .then((response) => response.json())
        .then((data) => printData(data))
}

    let totalAnswerCorrect = [];
    let totalAnswerIncorrect = [];
    let total = [ ];


    

function printData(data) {
    let container = document.getElementById('questions-container');

    if(nico == 'multiple'){
        data.results.forEach((element, i) => {
            

            let randomD = random(element.correct_answer, element.incorrect_answers);

            total.push(element.correct_answer , ...element.incorrect_answers) 

            container.innerHTML += `<div class="col-md-4 mt-2">
                                        <div class="card p-4">
                                            <div class="card-body">
                                                ${element.question}
                                            </div>
                                            <div class="card-body">
                                                ${element.category}
                                            </div>
                                            <div class="card-body">
                                                ${element.difficulty}
                                            </div>
                                            <div class="card-body">
                                                ${element.correct_answer}
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}" required>
                                                <label class="form-check-label" for="answer${[i]}">
                                                     ${value = randomD[0]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}" required>
                                                <label class="form-check-label" for="answer${[i]}">
                                                    ${value = randomD[1]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}"required>
                                                <label class="form-check-label" for="answer${[i]}">
                                                    ${value = randomD[2]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input p-3" type="radio" name="result${[i]}" id="answer${[i]}"required>
                                                <label class="form-check-label" for="answer${[i]}">
                                                    ${value = randomD[3]}
                                                </label>
                                            </div>
                                        </div>
                                    </div>`;


                                    totalAnswerCorrect.push(element.correct_answer);
                                    totalAnswerIncorrect.push(element.incorrect_answers);
                                    

        });
        // total = [totalAnswerCorrect + totalAnswerIncorrect];
        // console.log(totalAnswerCorrect);
        // console.log(totalAnswerIncorrect);
        
    }else{
        data.results.forEach((element, i) => {

            let randomD = random(element.correct_answer, element.incorrect_answers);
            answer = 0;
            total.push(element.correct_answer , ...element.incorrect_answers) 

            container.innerHTML += `<div class="col-md-4 mb-4">
                                        <div class="card">
                                            <div class="card-body">
                                                ${element.question}
                                            </div>
                                            <div class="card-body">
                                                ${element.category}
                                            </div>
                                            <div class="card-body">
                                                ${element.difficulty}
                                            </div>
                                            <div class="card-body">
                                                ${element.type}
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}"required>
                                                <label class="form-check-label" for="correct">
                                                    ${randomD[0]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="result${[i]}" id="answer${[i]}"required>
                                                <label class="form-check-label" for="incorrect">
                                                    ${randomD[1]}
                                                </label>
                                            </div>
                                        </div>
                                    </div>`;

                                    totalAnswerCorrect.push(element.correct_answer);
                                    totalAnswerIncorrect.push(element.incorrect_answers);
        });
        // console.log(totalAnswerCorrect)
        // console.log(totalAnswerIncorrect);
    }

};

// let result = [];

// function checkQuestions(){
//     for(let i = 0; i < total.length; i++){
//         if(document.getElementById('answer'+[i]).checked == true){
//             const xd = 'Hola';
//         }   
//         console.log(xd);
//     }
    
    
// }

let answersChecked = [];
let answerCorrect = [];
let answerIncorrect = [];
function checkQuestions(){
    for(let i = 0; i < total.length; i++){
        if(total == document.getElementById('answer'+ [i]).checked){
           (answersChecked.push(document.getElementById('answer'+[i]).value));
           alert('Correcta bien')
        }
        else{
            alert('Incorrecta mal')
        }
        break;
    };
    console.log(answersChecked);
    console.log(answerIncorrect);
    comparationAnswers();
}

    let answerCorrectCount = 0;
    let answerIncorrectCount = 0;

function comparationAnswers(){
    answersChecked.forEach((b) => {
        if(answerCorrectCount[b] == answersChecked[b]){
            answerCorrectCount ++ ;
        }else{
            answerIncorrectCount ++;
        }
    })
    console.log('Estas son las correctas'+''+answerCorrect.value);
    console.log('Estas son las Incorrectas'+''+answerIncorrect.value);
}




function printCategories(categories) {
    const categoriesContainer = document.getElementById('select-category');
    categories.forEach((category) => {
        categoriesContainer.innerHTML += `<option value="${category.id}">${category.name}</option>`;
    })
}



getCategories();



function random(correct, incorrects){
    const  array = [correct, ...incorrects];
    array.sort(function() {
        return Math.random() - 0.5;
    })
    return array;
}






