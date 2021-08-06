$(document).ready(function() {
    var button = $('#submit');
    var value = $('#number');
    var div = $('#collatz');
    var steps = $('#steps');
    var high = $('#high');
    var odd = $('#odd');
    var even = $('#even');
    var counter = 0;
    var highestNum = 0;
    var evenNum = 0;
    var oddNum = 0;

    button.on('click', function () {
        highestNum = 0;
        counter = 0;
        div.empty();
        number = value.val()
        nfunc(number);
    });

    function nfunc(number) { //if x = even devide | If x = odd * 3 + 1
        while(number != 1) {
            if(number % 2 == 0) {
                div.append("<p class='even'>"+number+"</p>");
                number = number / 2;
                evenNum++;
            } else {
                div.append("<p class='odd'>"+number+"</p>");
                number = (number * 3) + 1;
                oddNum++;
            }
            if(number > highestNum) {
                highestNum = number;
                high.html(number);
            }
            if(number == 1) {
                div.append("<p class='odd'>"+number+"</p>");
            }
            steps.html(counter);
            even.html(evenNum);
            odd.html(oddNum);
            counter++;
        }
    }

})