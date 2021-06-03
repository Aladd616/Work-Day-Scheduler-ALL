// save button variable
var saveBtn = $('.saveBtn');

// moment to display the current day in the header
var weekDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(weekDay);

// variable for the current hour
var hour = Number(moment().format('H'));
console.log("hour", hour);

// creates array of the description elements of the page
const descriptions = $('.description');
// empty array for id elements
var idArray = [];
    
// checks if there is data in local storage and projects it into the correct text field
    $('.description').each(function() {
        var id = $(this).parent().attr('id');
        idArray.push(id);

        console.log('idArray',idArray)
        console.log("descriptions",descriptions)

        for (i = 0; i < descriptions.length; i++) {
            $(descriptions[i]).val(localStorage.getItem(idArray[i]))
        }
        
    });


// places colors on the text fields of each hour using the variable hour
function getLineClass(h) {
    if (h < idArray) {
        return 'past';
    } else if (h > idArray) {
        return 'future';
    } else {
        return 'present';
    };
};


const lineClasses = idArray.map(hr => getLineClass(hr));

console.log(lineClasses)


for (i = 0; i < descriptions.length; i++) {
    $(descriptions[i]).addClass(lineClasses[i])
}


// when the save button is clicked saves what is in the textfield to locastorage labled by the of of the section
saveBtn.on('click', function() {
    var text = $(this).siblings('.description').val();
    var hourly = $(this).parent().attr('id');
    localStorage.setItem(hourly, text);
   
})









