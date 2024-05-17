const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
    },
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      answer: 'France',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      answer: 'Mount Everest',
    },
    {
      question: 'Which is the largest ocean on Earth?',
      options: [
        'Pacific Ocean',
        'Indian Ocean',
        'Atlantic Ocean',
        'Arctic Ocean',
      ],
      answer: 'Pacific Ocean',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
  ];
  let index=0;
  let score=0;
  const quesbox=document.querySelector('#quesbox');
  const input_options=document.querySelectorAll('.options');
  const submit_btn=document.querySelector('#submit');
  const show_btn=document.querySelector('#showAnswer');
  const result=document.querySelector('.result');
  const next_btn=document.querySelector('#next_ques');
  const answer_display=document.querySelector('#answer_display');
  const new_btn=document.querySelector('#newGame');
  const ques_loader=()=>{
    const data=questions[index];
    quesbox.innerText=`${index+1}) ${data.question}`;
    input_options[0].nextElementSibling.innerText=data.options[0];
    input_options[1].nextElementSibling.innerText=data.options[1];
    input_options[2].nextElementSibling.innerText=data.options[2];
    input_options[3].nextElementSibling.innerText=data.options[3];
  };
  ques_loader();
  // first check all options 
  // then store info of options 
  // if user submits use info of options and validate answer 
  // if correct add it in score or do not add if incorrect 
  // show correct answer 
  // display new question 
  // options-->submit-->score-->next question-->last question-->display result-->new game
  // in score-->manipulate score and display correct answer
input_options.forEach((element)=>{
    element.addEventListener('click',function(){
        quesbox.dataset.track_btn=element.id;
        quesbox.dataset.last_key='option';
    })
})
submit_btn.addEventListener('click',function(){
    if(quesbox.dataset.track_btn){
    show_btn.classList.remove('hide');
    if(index<9){
        next_btn.classList.remove('hide');
    }
    if(index===9){
        new_btn.classList.remove('hide');
    }
    const Answer=questions[index].answer;
    const option_clicked=document.getElementById(quesbox.dataset.track_btn);
    const label_data=option_clicked.nextElementSibling.innerText;
        if(quesbox.dataset.last_key!=='submit'){
            if(Answer===label_data){
                score++;
            }
            result.innerHTML=`<span> your current score is ${score}/10</span>`;
            submit_btn.classList.add('hide');
        }
    }
    else{
        console.log('i am here');
        alert('please select one of the options');
    }
    quesbox.dataset.last_key='submit';
})
show_btn.addEventListener('click',function(){
    answer_display.innerHTML=`<span>${questions[index].answer}</span>`;
    submit_btn.classList.add('hide');
    quesbox.dataset.last_key='show';
})
next_btn.addEventListener('click',function(){
    index++;
    ques_loader();
    input_options.forEach((element)=>{
        element.checked=false;
    })
    show_btn.classList.add('hide');
    next_btn.classList.add('hide');
    submit_btn.classList.remove('hide');
    answer_display.innerHTML='';
    quesbox.dataset.track_btn='';
    quesbox.dataset.last_key='next';
})
new_btn.addEventListener('click',function(){
    index=0;
    score=0;
    ques_loader();
    input_options.forEach((element)=>{
        element.checked=false;
    })
    quesbox.dataset.last_key='';
    quesbox.dataset.track_btn='';
    answer_display.innerHTML='';
    result.innerHTML='';
    submit_btn.classList.remove('hide');
    show_btn.classList.add('hide');
    next_btn.classList.add('hide');
    new_btn.classList.add('hide');
})