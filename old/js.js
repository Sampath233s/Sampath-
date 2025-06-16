// alert("confirm the webpage");
// prompt("give the permision");
// confirm("it's ok");

// var a=56;
// console.log(a)
// let b=87;
// document.write(b)
// const e=98;
// console.log(e)
// let c=12<56;
// document.write(c)
// var cars =["tata", "mahindra", "toyata",{name:"sam"}]
// document.write(cars)
// let persondetails={
//     Name:'sam',
//     location:'hyderbad',
//     hobbies:'playing cricket'
// }
// console.log(persondetails)

var name=prompt("name of the student");
var marks=prompt("enter u r marks");
switch(true){
    case marks>90&&marks<=100:
        result ="A grade";
        break;
        case marks>80&&marks<=89:
        result ="B grade";
        break;
        case marks>70&&marks<=79:
        result ="C grade";
        break;
        case marks>50&&marks<=69:
        result ="D grade";
        break;
        default:
            result ="invalid"
}
document.write(result);

    
