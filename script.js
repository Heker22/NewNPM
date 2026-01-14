
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


const html = '<h1>LETSGOSKI</h1>';

const text = basicLightbox.create(html, {
    width: '500px',
    height: '300px',
    backgroundColor: 'red',
    
})

text.show();