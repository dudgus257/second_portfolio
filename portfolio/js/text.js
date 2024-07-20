const textWrap = document.getElementById('textWrap');
const context = "Welcome to younghyun's Portfolio";
const textArray = context.split('');
const tagName = 'span';
let interval;
let timer = 50;
let index = 0;

const createNode = (tagname) => {
    const tag = document.createElement(tagname);
    return tag;
}

const insertLetters = () => {
    textArray.forEach(letter => {
        const textNode = createNode(tagName)
        if(letter === ' '){
            textNode.textContent = '\xa0'
        } else {
            textNode.textContent = letter;
        }
        textWrap.appendChild(textNode)
    })
}

const addClass = () => {
    const letters = Array.from(textWrap.querySelectorAll(tagName))
    letters[index].classList.add('text-animated')
    index++
    if(letters.length === index){
        clearInterval(interval)
    }
}

const loadText = () => {
    insertLetters();
    addClass();

    interval = setInterval(addClass, timer)
}

document.addEventListener('load', loadText())


// createNode -  html에 삽입될 span 태그를 생성할 때 사용

// insertLetters - 생성된 span 태그 안에 문자열을 한 글자씩 삽입, 공백문자의 경우 태그만 생성되고 아무 내용이 들어가지 않기 때문에 공백문자 - &nbsp;가 삽입되도록 '\xa0' 유니코드를 삽입

// addClass - setInterval 메서드를 활용하여 일정 시간 간격마다 클래스를 삽입하도록 실행

// loadText - 위에 나열된 함수들이 실질적으로 절차대로 실행되도록 묶어준 함수