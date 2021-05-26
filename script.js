
let day = 13 ;
const days = document.getElementById('days');
const nextDays = document.getElementById('nextDays');
const dayPanelTop = document.getElementById('topContDay');
const dayPanelBottom = document.getElementById('bottomContDay');
days.textContent = '14';
nextDays.textContent = '14';

let hour = 23 ;
const hours = document.getElementById('hours');
const nextHours = document.getElementById('nextHours');
const hourPanelTop = document.getElementById('topContHour');
const hourPanelBottom = document.getElementById('bottomContHour');
hours.textContent = '00';
nextHours.textContent = '00';

let min = 59 ;
const minutes = document.getElementById('minutes');
const nextMinutes = document.getElementById('nextMinutes');
const minPanelTop = document.getElementById('topContMin');
const minPanelBottom = document.getElementById('bottomContMin');
minutes.textContent = '00';
nextMinutes.textContent = '00';

let sec = 59 ;
const secondes = document.getElementById('secondes');
const nextSecondes = document.getElementById('nextSecondes');
const secPanelTop = document.getElementById('topContSec');
const secPanelBottom = document.getElementById('bottomContSec');
secondes.textContent = '00';
nextSecondes.textContent = '00';


secPanelTop.setAttribute('style', 'animation-duration: 1s;');
secPanelBottom.setAttribute('style', 'animation-duration: 1s;');

minPanelTop.setAttribute('style', 'animation-duration: 1s;');
minPanelBottom.setAttribute('style', 'animation-duration: 1s;');

hourPanelTop.setAttribute('style', 'animation-duration: 1s;');
hourPanelBottom.setAttribute('style', 'animation-duration: 1s;');

dayPanelTop.setAttribute('style', 'animation-duration: 1s;');
dayPanelBottom.setAttribute('style', 'animation-duration: 1s;');


const decrease = () => {
    switch(day){
        case -1:
            day = 13;
        case 0:
            day = 14;
        default:
            dayPanelTop.setAttribute('style', 'animation-duration: 0s;');
            dayPanelBottom.setAttribute('style', 'animation-duration: 0s;');
            if((`${day}`).length == 1){
                days.textContent = `0${day}`;
                nextDays.textContent = `0${day}`;
            } else {
                days.textContent = `${day}`;
                nextDays.textContent = `${day}`;
            }
    };
    switch(hour){
        case -1:
            dayPanelTop.setAttribute('style', 'animation-duration: 0s;');
            dayPanelBottom.setAttribute('style', 'animation-duration: 0s;');
            hour = 23;
        case 0:
            if(min == 0 && sec == 0){
                hour = 24;
                day -= 1;
                dayPanelTop.setAttribute('style', 'animation-duration: 1s;');
                dayPanelBottom.setAttribute('style', 'animation-duration: 1s;');
            }
        default:
            hourPanelTop.setAttribute('style', 'animation-duration: 0s;');
            hourPanelBottom.setAttribute('style', 'animation-duration: 0s;');
            if((`${hour}`).length == 1){
                hours.textContent = `0${hour}`;
                nextHours.textContent = `0${hour}`;
            } else if(hour == 24){
                hours.textContent = '00';
                nextHours.textContent = '00';
            } else {
                hours.textContent = `${hour}`;
                nextHours.textContent = `${hour}`;
            }
    };
    switch(min){
        case -1:
            hourPanelTop.setAttribute('style', 'animation-duration: 0s;');
            hourPanelBottom.setAttribute('style', 'animation-duration: 0s;');
            min = 59;

            console.log('min < 0 ==> change hour');
        case  0:
            if(sec == 0){
                min = 60;
                hour -= 1;
                hourPanelTop.setAttribute('style', 'animation-duration: 1s;');
                hourPanelBottom.setAttribute('style', 'animation-duration: 1s;');
            }
        default:
            minPanelTop.setAttribute('style', 'animation-duration: 0s;');
            minPanelBottom.setAttribute('style', 'animation-duration: 0s;');
            if((`${min}`).length == 1){
                minutes.textContent = `0${min}`;
                nextMinutes.textContent = `0${min}`;
            } else if(min == 60){
                minutes.textContent = '00';
                nextMinutes.textContent = '00';
            } else {
                minutes.textContent = `${min}`;
                nextMinutes.textContent = `${min}`;
            }
    };
    switch(sec){
        case -1:
            minPanelTop.setAttribute('style', 'animation-duration: 0s;');
            minPanelBottom.setAttribute('style', 'animation-duration: 0s;');
            sec = 59;
        case 0:
            console.log('sec=0 ==> change min');
            sec = 60;
            min -= 1;
            minPanelTop.setAttribute('style', 'animation-duration: 1s;');
            minPanelBottom.setAttribute('style', 'animation-duration: 1s;');
        default:
            if((`${sec}`).length == 1){
                secondes.textContent = `0${sec}`;
                nextSecondes.textContent = `0${sec}`;
            } else if(sec == 60){
                secondes.textContent = '00';
                nextSecondes.textContent = '00';
            } else {
                secondes.textContent = `${sec}`;
                nextSecondes.textContent = `${sec}`;
            }

    };
    sec--;
};

setInterval(decrease, 1000);