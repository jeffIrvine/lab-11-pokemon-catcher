import { getFromLocalStorage } from '../app.js';

const resultsArray = getFromLocalStorage('HAUL');
console.log(resultsArray);
// const pokemonId = resultsArray.map((item) => {
//     return item.pokemonId;
// });

const pokemonName = resultsArray.map((item) => {
    return item.pokemonName;
});

const caught = resultsArray.map((item) => {
    return item.pokemonName;
});

const encountered = resultsArray.map((item) => {
    return item.pokemonName;
});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'Pokemon Encountered',
    data: {
        labels: pokemonName,
        datasets: [{
            label: '',
            data: encountered,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart2 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: pokemonName,
//         datasets: [{
//             label: '# of Votes',
//             data: caught,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });