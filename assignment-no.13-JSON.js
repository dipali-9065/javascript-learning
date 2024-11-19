const data = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": "32, laham st.",
    "city": "Innusbruck",
    "country": "Austria"
}`;
console.log("=====Employee Information===");

const DataInObjectFormat = JSON.parse(data);
console.log("Employee role");

console.log(DataInObjectFormat);

console.log("last name");
const dd=DataInObjectFormat.role[0];
console.log(dd);

console.log("Joining Year");

const da=DataInObjectFormat.name.split(" ")[1];
console.log(da);


const doj = DataInObjectFormat.doj; 
const year = doj.split("-")[2];  
console.log(year);  


