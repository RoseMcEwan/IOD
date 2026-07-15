const DateTime = luxon.DateTime;
let nowLuxon = DateTime.now();

const birthDayLuxon = DateTime.fromISO("1997-07-18");

const totalDays = DateTime.now().diff(
    birthDayLuxon,
    ['days']
);

const age = DateTime.now().diff(
    birthDayLuxon,
    ['years', 'months', 'days']
);

console.log(nowLuxon.toFormat("yyyy-MM-dd"));
console.log(birthDayLuxon.toFormat("yyyy-MM-dd"));
console.log(`${Math.floor(totalDays.days)} days`);
console.log(`${age.years} years, ${age.months} months, ${Math.floor(age.days)} days`);


if (birthDayLuxon > nowLuxon) {
    console.log(birthDayLuxon.toFormat("yyyy-MM-dd"));
}
else {
    console.log(nowLuxon.toFormat("yyyy-MM-dd"));
}


if (nowLuxon > birthDayLuxon) {
    console.log("Today's date is after the birth date");
} else {
    console.log("Today's date is before the birth date");
}

const london = DateTime.now().setZone('Europe/London');

console.log(london.toFormat("yyyy-MM-dd HH:MM"));