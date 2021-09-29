
charset="utf-8"

function checkcalc(bookbed) {
var depDate = new Date(bookbed.departureDate.value);
var arrDate = new Date(bookbed.arrivalDate.value);
if (bookbed.arrivalDate.value==0 || bookbed.departureDate.value==0){
alert("Please choose dates for both departue and arrival.");
return false;
}
else if (arrDate.getTime() <= depDate.getTime()) {
alert("The arrival date should be after the departure date. Please Check.");
return false;
}
else return (true);
}



function toggleInput() {
var info = document.getElementById('bookingInfo');
var input = document.getElementById('bookingInput');

if (info.style.display != 'none') {
info.style.display = 'none';
input.style.display = 'block';
} else {
info.style.display = 'block';
input.style.display = 'none';
}
}
