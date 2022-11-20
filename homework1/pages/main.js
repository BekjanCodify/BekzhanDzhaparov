//zadanie 1
let seaseons=prompt("Enter month");
switch(seaseons){
    //winter
    case "December":
    case "december":
        console.log("Winter");
    break;
    case "Jenuary":
    case "jenuary":
        console.log("Winter");
    break;
    case "February":
    case "february":
        console.log("Winter");
    
    //spring
    case "March":
    case "march":
        console.log("Spring");
    break;
    case "Apryl":
    case "apryl":
        console.log("Spring");
    break;
    case "May":
    case "may":
        console.log("Spring");
    break;

    //summer
    case "June":
    case "june":    
        console.log("Summer");
    break;

    case "July":
    case "july":    
        console.log("Summer");
    break;

    case "August":
    case "august":    
        console.log("Summer");
    break;

    //autumn
    case "September":
    case "september":    
        console.log("Autumn");
    break;

    case "October":
    case "october":    
        console.log("Autumn");
    break;

    case "November":
    case "november":    
        console.log("Autumn");
    break;
    default:
        console.log("Error,try again")
}

//zadanie 2
let month=3;
if(month <=2 && month==12){
    console.log("winter");
}else if(month <=5){
    console.log("spring");
}else if(month <=8){
    console.log("summer");
}else if(month <=11){
    console.log("autumn");
}else{
    console.log("Error,try again");
}

//zadanie3
let a = 2;
let b = 6;
if(a >=2 && a <=11){
    console.log("True");
}else{
    console.log("False");
}if(b >=6 && b <=14){
    console.log("True");
}else{
    console.log("False");
}