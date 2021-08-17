let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
a= new Date();
time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
document.getElementById('time').innerHTML=time+'<br>'
date=a.toLocaleDateString(undefined, options);
document.getElementById('date').innerHTML=date;   
}, 1000)
