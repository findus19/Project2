function morningTime() {
  let mornig = new Date(),
      hours = mornig.getHours();
      if(hours >= 5 && hours < 12){
        return document.getElementById('timeA').textContent = 'Доброе утро'
      } else if(hours >= 12 && hours < 16){
        return document.getElementById('timeA').textContent = 'Добрый день'
      } else if(hours >= 16 && hours < 23){
        return document.getElementById('timeA').textContent = 'Добрвый вечер'
      } else if(hours >= 23 || hours < 5){
        return document.getElementById('timeA').textContent = 'Доброй ночи'
      }
}
morningTime();

const week = ["Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
let time = new Date(),
d = time.getDay() - 1,
weekday = week[d];
document.getElementById('timeB').textContent = 'Сегодня ' + weekday ;

function zero(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
};

function dateTime()
{
  let currentDatetime = new Date();
  day = zero(currentDatetime.getDate()),
  month = zero(currentDatetime.getMonth()+1),
  year = currentDatetime.getFullYear(),
  hours = zero(currentDatetime.getHours()),
  minutes = zero(currentDatetime.getMinutes()),
  seconds = zero(currentDatetime.getSeconds());
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  return hours + ":" + minutes + ":" + seconds + ' ' + ampm;
}


setInterval(function () {
  document.getElementById('timeC').textContent = 'Текущее время ' + dateTime();
}, 1000);


function newYear(year){
  let dateStop = new Date(year).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      days = Math.floor(timeRemaining / 60 / 60 / 24);
  return document.getElementById('timeD').textContent = 'До нового года осталось ' + days + ' дней'
}
newYear('1 january 2021')