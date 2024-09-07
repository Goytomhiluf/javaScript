const Age =5;
let ageGroup;
if (Age<13){
    ageGroup ="child";
}

else if ( Age>=13 && Age<=19){
    ageGroup ="teenager";
}

else if (Age>=20 && Age<=59){
    ageGroup ="adult";
}

else if (Age>=60){
    ageGroup ="senior";
}

console.log(`age; ${Age} ageGroup; ${ageGroup}`);