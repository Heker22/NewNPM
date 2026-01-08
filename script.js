
/*import { customAlphabet } from "nanoid";
const id = customAlphabet('abcdefghilm', 4);

console.log(id());*/

/*line graphic*/

import {Chart} from 'chart.js'

const lineData = {
    labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datsets: [{
        label: 'Temperature',
        data: [3, 4, 9, 16, 20, 25, 28],
        fill: false,
        borderColor: 'rgb(75.192.192)',
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
)