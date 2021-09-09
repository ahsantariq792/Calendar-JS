var newDate = new Date();
function calendar(){
    
    var currentYear = document.getElementById('year');
    currentYear.innerHTML = newDate.getFullYear();

    var currentMonth = newDate.getMonth();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dmonth = document.getElementById('current-month');
    dmonth.innerHTML = months[currentMonth];

    var currentDate = new Date().toLocaleDateString();
    var mDate = document.getElementById('tdate');
    mDate.innerHTML = currentDate;

    var currentDay = new Date().toDateString();
    var mDay = document.getElementById('tday');
    mDay.innerHTML = currentDay.slice(0,3)



    var days = document.getElementById('days');
    days.innerHTML = "";
    var currentYear = newDate.getFullYear();
    var LDays = new Date(currentYear,currentMonth+1,0);
    var prevDays = new Date(currentYear,currentMonth,0);
    console.log(prevDays)
    console.log(LDays)
    
    for(var j = prevDays.getDate()-prevDays.getDay();j <= prevDays.getDate(); j++){
        days.innerHTML += "<div id='prev-date'>"+j+"</div>";
        m++;
    }
    for( var i = 1; i <= LDays.getDate(); i++ ){
        if(i === new Date().getDate() && newDate.getMonth() === new Date().getMonth() && newDate.getFullYear() === new Date().getFullYear()){
            days.innerHTML += "<div id='today'>"+i+"</div>";
        }
        else{
            days.innerHTML += "<div>"+i+"</div>";
        }
        m++;
    }
    for(var k = 1;k <= 7-LDays.getDay()-1; k++){
        days.innerHTML += "<div id='next-date'>"+k+"</div>";
        m++;
    }

    var m = 0;
    if(m < 36){
        for( l = k;l <= k+6; l++){
            days.innerHTML += "<div id='next-date'>"+l+"</div>";
        }
    }
}
//END OF CALENDAR FUNCTION-HERE


//previous and next button code:
function pMonth(){
    newDate.setMonth(newDate.getMonth()-1);
    calendar();
}
function nMonth(){
    newDate.setMonth(newDate.getMonth()+ 1);
    calendar();
}
function pYear(){
    newDate.setFullYear(newDate.getFullYear()-1);
    calendar();
}
function nYear(){
    newDate.setFullYear(newDate.getFullYear()+ 1);
    calendar();
}

calendar();