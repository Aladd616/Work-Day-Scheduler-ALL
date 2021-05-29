var container = $(".container");


var weekDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(weekDay);

var hour = Number(moment().format('H'));
console.log("hour", hour);

function rowPlanner() {

}

function dayColor() {

}

const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
function getLineClass(h) {
    if (h < hour) {
        return 'past';
    } else if (h > hour) {
        return 'future';
    } else {
        return 'present';
    };
};
const lineClasses = hours.map(hr => getLineClass(hr));

console.log(lineClasses)

const descriptions = document.getElementsByClassName('description');
for (i = 0; i < descriptions.length; i++) {
    descriptions[i].classList.add(lineClasses[i])
}
