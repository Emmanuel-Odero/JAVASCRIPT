
//Here we are learning about the switch statements
// let grade = "A";
// let results;
// switch(grade){
//     case grade "A":
//         results="Perfomed Excellent";
//         break;
//     case grade "C":
//         results="Performed Avarage";
//         break;
//     default:
//         results="Result not found or Performed Below Avarage";
// };
// console.log(results);

//Using switch statement and the date() method to get date;
var d = new Date();
	
switch(d.getDay()) {
	case 0:
		console.log("Today is Sunday.");
		break;
	case 1:
		console.log("Today is Monday.");
		break;
	case 2:
		console.log("Today is Tuesday.");
		break;
	case 3:
		console.log("Today is Wednesday.");
		break;
	case 4:
		console.log("Today is Thursday.");
		break;
	case 5:
		alert("Today is Friday.");
		break;
	case 6:
		alert("Today is Saturday.");
		break;   
	default:
		console.log("No information available for that day.");
		break;
}