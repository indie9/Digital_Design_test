let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navbar');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});



var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > (coords/2)) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled <(coords/2)) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

//ФУНКЦИЯ ДЛЯ ТЕСТА
function getDayInfo(strInput){
  
  var arrDate = strInput.split('.');
  var day = Number(arrDate[0]);
  var month = Number(arrDate[1]);
  var year = Number(arrDate[2]);
  var date = new Date(year,month-1,day);
  var firstDate = new Date(year,month-1,1);
  var fD = firstDate.getDay();
  
  if (fD == 0){
    fD = 7;
  }
  var addDay = day + (fD - 1)
  var weekNumber = Math.floor( addDay/7);
  if (addDay % 7 != 0){
    weekNumber += 1;
  }
  
  var arrMonth = ['Января','Февраля','Марта', 'Апреля', 'Мая',
  'Июня','Июля','Августа', 'Сентября','Октября','Ноября', 'Декабря'];

  var arrDay = ["Воскресенье", "Понедельник", "Вторник", "Среда","Четверг","Пятница", "Суббота" ];

  console.log(arrDay[date.getDay()] + ', ' + weekNumber + ' неделя ' + arrMonth[month-1] + ' ' + year + ' года')
  return(arrDay[date.getDay()] + ', ' + weekNumber + ' неделя ' + arrMonth[month-1] + ' ' + year + ' года');
}
getDayInfo('01.01.2022');


//ЭТА ЖЕ ФУНКЦИЯ ДЛЯ САЙТА
function getDayInfo2(){
  var strInput=document.getElementById("input_date").value

  var arrDate = strInput.split('.');
  var day = Number(arrDate[0]);
  var month = Number(arrDate[1]);
  var year = Number(arrDate[2]);
  var date = new Date(year,month-1,day);
  var firstDate = new Date(year,month-1,1);
  var fD = firstDate.getDay();
  
  if (fD == 0){
    fD = 7;
  }
  var addDay = day + (fD - 1)
  var weekNumber = Math.floor( addDay/7);
  if (addDay % 7 != 0){
    weekNumber += 1;
  }
  
  var arrMonth = ['Января','Февраля','Марта', 'Апреля', 'Мая',
  'Июня','Июля','Августа', 'Сентября','Октября','Ноября', 'Декабря'];

  var arrDay = ["Воскресенье", "Понедельник", "Вторник", "Среда","Четверг","Пятница", "Суббота" ];
  document.getElementById("output_date").innerHTML = (arrDay[date.getDay()] + ', ' + weekNumber + ' неделя ' + arrMonth[month-1] + ' ' + year + ' года') ;
}