const board = document.querySelector('.board')

//добавляем клетки поля
function addBoxes() {
for (let i = 0; i < 9; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    board.append(box)
}
}

addBoxes()

let x = 0;
let o = 0;
const boxes = document.querySelectorAll('.box')

//добавтляются крестики и нолики
board.addEventListener('click', (event) => {
    if (event.target.classList.contains('box')) {
        event.target.innerHTML = 'X'
        x++;
        
        if (x + o < 9) {
            let timerId = setTimeout(addNull, 1000)
            o++;
            choosingWinner()
            boxes.forEach(item => {
                if(item.classList.contains('red')) {
                    clearTimeout(timerId);  
                }
            })
            
        } else {
            choosingWinner()
            nullresult()          
        }
}
})

//функция обнуления результата
function nullresult() {
    document.querySelector('.title').addEventListener('click', () => {
        x = 0;
        o = 0;
        boxes.forEach(item => {
            item.innerHTML = ''
            item.classList.remove('red')
            document.querySelector('.result').innerHTML = 'Сыграем еще?'
        })
    }) 
}

//функцияя добавления ноликов
function addNull(element) {
    const number = getRandomnumber()
    number.innerHTML = 'O'
}

//функция выбора рандомной незанятой клетки
function getRandomnumber() {
    let index = 0
    while (boxes[index].innerHTML !== '') {
        index = Math.floor(Math.random() * 9)
    }      
    return boxes[index]
}

//функция выбора победителя
function choosingWinner() {    
    if (boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML !== '' && boxes[1].innerHTML !== '' && boxes[2].innerHTML !== '') {
        boxes[0].classList.add('red')
        boxes[1].classList.add('red')
        boxes[2].classList.add('red')
    } else if (boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML !== '' && boxes[4].innerHTML !== '' && boxes[5].innerHTML !== '') {
        boxes[3].classList.add('red')
        boxes[4].classList.add('red')
        boxes[5].classList.add('red')
    } else if (boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML && boxes[6].innerHTML=== boxes[8].innerHTML && boxes[6].innerHTML !== '' && boxes[7].innerHTML !== '' && boxes[8].innerHTML !== '') {
        boxes[6].classList.add('red')
        boxes[7].classList.add('red')
        boxes[8].classList.add('red')
    } else if (boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[0].innerHTML === boxes[6].innerHTML && boxes[0].innerHTML !== '' && boxes[3].innerHTML !== '' && boxes[6].innerHTML !== '') {
        boxes[0].classList.add('red')
        boxes[3].classList.add('red')
        boxes[6].classList.add('red')
    }  else if (boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML && boxes[1].innerHTML === boxes[7].innerHTML && boxes[1].innerHTML !== '' && boxes[4].innerHTML !== '' && boxes[7].innerHTML !== '') {
        boxes[1].classList.add('red')
        boxes[4].classList.add('red')
        boxes[7].classList.add('red')
    } else if (boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML !== '' && boxes[5].innerHTML !== '' && boxes[8].innerHTML !== '') {
        boxes[2].classList.add('red')
        boxes[5].classList.add('red')
        boxes[8].classList.add('red')
    } else if (boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML !== '' && boxes[4].innerHTML !== '' && boxes[8].innerHTML !== '') {
        boxes[0].classList.add('red')
        boxes[4].classList.add('red')
        boxes[8].classList.add('red')
    } else if (boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML !== '' && boxes[4].innerHTML !== '' && boxes[6].innerHTML !== '') {
        boxes[2].classList.add('red')
        boxes[4].classList.add('red')
        boxes[6].classList.add('red')
    } 
} 