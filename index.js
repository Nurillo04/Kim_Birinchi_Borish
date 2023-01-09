const space = Number(prompt("masofani kiriting"));

const elPerson = document.querySelector('#person');
const elBicycle = document.querySelector('#bicycle');
const elCar = document.querySelector('#car');
const elPlane = document.querySelector('#plane');

const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;


if (!isNaN(space)) {

    const personFullTime = space / personSpeed;
    const personHour = Math.floor(personFullTime);
    const personMinute = Math.floor((personFullTime - personHour) * 60);
    const personSecond = Math.floor(((personFullTime - personHour) * 60 - personMinute) * 60);

    const bicycleFullTime = space / bicycleSpeed;
    const bicycleHour = Math.floor(bicycleFullTime);
    const bicycleMinute = Math.floor((bicycleFullTime - bicycleHour) * 60);
    const bicycleSecond = Math.floor(((bicycleFullTime - bicycleHour) * 60 - bicycleMinute) * 60);

    const carFullTime = space / carSpeed;
    const carHour = Math.floor(carFullTime);
    const carMinute = Math.floor((carFullTime - carHour) * 60);
    const carSecond = Math.floor(((carFullTime - carHour) * 60 - carMinute) * 60);

    const planeFullTime = space / planeSpeed;
    const planeHour = Math.floor(planeFullTime);
    const planeMinute = Math.floor((planeFullTime - planeHour) * 60);
    const planeSecond = Math.floor(((planeFullTime - planeHour) * 60 - planeMinute) * 60);



    elPerson.textContent = `${personHour} soat, ${personMinute }daqiqada   ${personSecond } soniyada yetib keladi`;
    elBicycle.textContent = `${bicycleHour} soat, ${bicycleMinute }daqiqada   ${bicycleSecond } soniyada yetib keladi`;
    elCar.textContent = `${carHour} soat, ${carMinute }daqiqada   ${carSecond } soniyada yetib keladi`;
    elPlane.textContent = `${planeHour} soat, ${planeMinute }daqiqada   ${planeSecond } soniyada yetib keladi`;

} else {
    alert('raqam kiriting');
}