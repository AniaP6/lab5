import './style.css';
import dayjs from 'dayjs';


const form = document.getElementById('birthdayForm');
const input = document.getElementById('birthday');
const dialog = document.getElementById('resultDialog');
const dialogContent = document.getElementById('dialogContent');
const closeBtn = document.getElementById('closeDialog');


form.addEventListener('submit', (event) => {

  event.preventDefault(); 


  const birthDateStr = input.value; 
  if (!birthDateStr) return;

  const birthDate = dayjs(birthDateStr);
  const today = dayjs().startOf('day'); 

  
  const daysLived = today.diff(birthDate, 'days');
  const isBirthdayToday = today.month() === birthDate.month() && today.date() === birthDate.date();
  let nextBirthday = birthDate.year(today.year());
  if (nextBirthday.isBefore(today)) {
    nextBirthday = nextBirthday.add(1, 'year');
  }

  const daysToNextBirthday = nextBirthday.diff(today, 'days');
  const weeksToNextBirthday = Math.floor(daysToNextBirthday / 7);

  let message = `Od Twoich narodzin minęło: <strong>${daysLived} dni</strong>.<br><br>`;

  if (isBirthdayToday) {
    alert("Wszystkiego najlepszego!");
  } else {
    message += `Tygodni do najbliższych urodzin: <strong>${weeksToNextBirthday}</strong>.<br>`;
    if (weeksToNextBirthday === 0) {
      message += `<br><span class="font-bold">Masz urodziny w tym tygodniu!</span>`;
    }
  }


  dialogContent.innerHTML = message;
  dialog.showModal(); 
});
closeBtn.addEventListener('click', () => {
  dialog.close(); 
});
