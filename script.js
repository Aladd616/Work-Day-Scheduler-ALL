var saveBtn = $('.saveBtn');

var weekDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(weekDay);

var hour = Number(moment().format('H'));
console.log("hour", hour);

const descriptions = $('.description');
var idArray = [];
    
    $('.description').each(function() {
        var id = $(this).parent().attr('id');
        idArray.push(id);

        console.log('idArray',idArray)
        console.log("descriptions",descriptions)

        for (i = 0; i < descriptions.length; i++) {
            $(descriptions[i]).val(localStorage.getItem(idArray[i]))
        }
        
    });



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



saveBtn.on('click', function() {
    var text = $(this).siblings('.description').val();
    var hourly = $(this).parent().attr('id');
    localStorage.setItem(hourly, text);
   
})









