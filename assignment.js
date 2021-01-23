// 1. Kilometer to meter conversion : 
// 1km = 1000m
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}
var kiloToMeter = kilometerToMeter(5);
console.log(kiloToMeter);


// 2. Budget calculator : 
// clock = 50;
// phone = 100;
// laptop = 500;
function budgetCalculator(clock, phone, laptop) {
    var totalbudget = (clock * 50) + (phone * 100) + (laptop * 500);
    return totalbudget;
}
var total = budgetCalculator(1, 2, 3); // In this line clock value = 1 , phone value = 2 , laptop value = 3.
console.log(total);


// 3. Hotel Cost :
// first 10 days rent = 100 ;
// second 10 days rent = 80 ;
// Then for the next all days = 50 ;
function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var fristTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        cost = fristTenDays + secondTenDays;
    }
    else {
        var fristTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var afterNextDays = remaining * 50;
        cost = fristTenDays + secondTenDays + afterNextDays;
    }
    return cost;
}
var totalCost = hotelCost(30); 
console.log(totalCost);


// 4. Mega friend ( Find the largest length of array ) :
function megaFriend() {
    var maxlength = "";
    var friend = ["sanjinaEsha", "sumi", "maria", "ritu"];

    for (i = 0; i < friend.length; i++) {
        var friendList=friend[i];
        if(friendList.length>maxlength.length){
            maxlength=friend[i];
        }
    }
    return maxlength;
}

var output=megaFriend();
console.log(output);
