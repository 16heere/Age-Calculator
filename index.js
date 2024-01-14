let input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let userDate = new Date(input.value);
    let y1 = userDate.getYear();
    let m1 = userDate.getMonth();
    let d1 = userDate.getDate();

    let today = new Date();
    let y2 = today.getYear();
    let m2 = today.getMonth();
    let d2 = today.getDate();

    let y3, m3, d3;

    y3 = y2 - y1;

    if(m1 <= m2){
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    } 
    if(d1 <= d2){
        d3 = d2 - d1;
    } else {
        m3--;
        let days = getDaysInMonth(m1, y1);
        console.log(days);
        d3 = days + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;

}

function getDaysInMonth(month, year){
    console.log(new Date(year, month + 1, 0).getDate());
    return new Date(year, month + 1, 0).getDate();
}