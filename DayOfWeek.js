let dayNumber = 4;
let dayName
switch (dayName) {
    case 1:
        dayName ="Monday";
        break;
    case 2:
        DayName = "Tuesday";
        break;
    case 3:
        DayName = "Wednesday";
        break;
    case 4:
        DayName = "Thursday";
        break;
    case 5:
        DayName = "Friday";
        break;
    case 6:
        DayName = "Saturday";
        break;
    case 7:
        DayName = "Sunday";
        break;
    default:
        dayName = "invalid day number";
}

console.log(`dayName ${dayName}`);