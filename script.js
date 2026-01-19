
/*import { customAlphabet } from "nanoid";
const id = customAlphabet('abcdefghilm', 4);

console.log(id());*/

/*line graphic*/

/*import Chart from 'chart.js/auto'

const lineData = {
    labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Temperature',
        data: [3, 4, 9, 16, 20, 25, 28],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension:0.1
    }],
    
}

const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
    }

}

const ctx = document.getElementById('lineChart')


new Chart(
    ctx,
    lineConfig
)*/


/*cirlce diagram

const data = {
    labels: ['Оренда', 'Їжа', 'Транспорт', 'Розваги'],
    datasets: [{
        label: 'Витрати',
        data: [800, 500, 150, 300],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
}

const ctx = document.getElementById('doughnutChart')


new Chart(
    ctx,
    config
)

*/

/*basiclightbox*/

/* ex 1
const img = `<img src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="book">`

const image = basicLightbox.create(img);

image.show();
*/

/*ex2
const html = '<h1>LETSGOSKI</h1>';

const text = basicLightbox.create(html, {
    width: '500px',
    height: '300px',
    backgroundColor: 'red',
    
})

text.show();
*/


/*gallery

const galleryLinks = document.querySelectorAll('.gallery a');

const images = Array.from(galleryLinks).map(link => link.href);

let currentIndex = 0;

let instains = null;

galleryLinks.forEach((link, index ) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        currentIndex = index;
        openLightbox();
    })
} );

function openLightbox(){
instains = basicLightbox.create(
    `  <img src="${images[currentIndex]}" alt="photo" width='90%' >`,
    {
        onShow:() => window.addEventListener('keydown',onKeyPress),
        onClose:() => window.removeEventListener('keydown',onKeyPress),
    }
)
instains.show();

}


function onKeyPress(event){
    if(event.key === 'ArrowRight'){
        showNext()
    }
    if(event.key === 'ArrowLeft'){
        showPrev()
    }
    if(event.key === 'Escape'){
        instains.close()
    }
}

function showNext(){
    currentIndex = (currentIndex + 1)% images.length;
    updateImage();
}

function showPrev(){
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    updateImage();
}

function updateImage(){
    const img = instains.element().querySelector('img');
    img.src = images[currentIndex]



const dog = {
    name: "Bricks",
    age: "11",
    isHappy: true
}

const dogJSON = JSON.stringify(dog);
console.log(dogJSON)

const dog = '{"name":"Bricks","age":11,"isHappy":true}';

const dogParse = JSON.parse(dog);
console.log(dogParse)

*/


const book = '{"title": "harry Potter", "author": "J.K Rowling", "genre": "fantastic" }'

const bookParse = JSON.parse(book);
console.log(bookParse);