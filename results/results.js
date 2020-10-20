import { getFromLocalStorage } from '../utils.js';

const resetButton = document.getElementById('reset-button');
const resultsArray = getFromLocalStorage('HAUL');

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});

const pokemonName = resultsArray.map((item) => {
    return item.pokemon;
});

const caught = resultsArray.map((item) => {
    return item.caught;
});

const encountered = resultsArray.map((item) => {
    return item.encountered;
});


var ctx = document.getElementById('my-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonName,
        datasets: [{
            label: 'Pokemon encountered!',
            data: encountered,
            backgroundColor: [
                'rgba(255, 99, 132, 5.0)',
                'rgba(54, 162, 235, 5.0)',
                'rgba(255, 206, 86, 5.0)',
                'rgba(75, 192, 192, 5.0)',
                'rgba(153, 102, 255, 5.0)',
                'rgba(255, 206, 86, 5.0)',
                'rgba(75, 192, 192, 5.0)',
                'rgba(153, 102, 255, 5.0)',
                'rgba(255, 159, 64, 5.0)',
                'rgba(255, 99, 132, 5.0)',
                'rgba(54, 162, 235, 5.0)',
                'rgba(255, 206, 86, 5.0)',
                'rgba(75, 192, 192, 5.0)',
                'rgba(153, 102, 255, 5.0)',
                'rgba(255, 159, 64, 5.0)'
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

var ctx = document.getElementById('my-chart-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonName,
        datasets: [{
            label: 'Pokemon caught!',
            data: caught,
            backgroundColor: [
                'rgba(255, 99, 132, 5.0)',
                'rgba(54, 162, 235, 5.0)',
                'rgba(255, 206, 86, 5.0)',
                'rgba(75, 192, 192, 5.0)',
                'rgba(153, 102, 255, 5.0)',
                'rgba(255, 159, 64, 5.0)',
                'rgba(255, 99, 132, 5.0)',
                'rgba(54, 162, 235, 5.0)',
                'rgba(255, 206, 86, 5.0)',
                'rgba(75, 192, 192, 5.0)',
                'rgba(153, 102, 255, 5.0)',
                'rgba(255, 159, 64, 5.0)'
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