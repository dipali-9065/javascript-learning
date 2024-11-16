const data =`{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": [
        "Dev",
        "DBA"
    ],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": "32, laham st.",
    "city": "Innusbruck",
    "country": "Austria",
},
"referred by": "E0012"
const jsontoobject=JSON.parse(data);
console.log(jsontoobject.role[0]);
console.log(jsontoobject.name.split(" ")[1]);
console.log(jsontoobject.doj.split("-"));
console.log(jsontoobject.doj[length-1]);
}  `,  jsontoobject=JSON.parse(data);
console.log(jsontoobject.role[0]);
console.log(jsontoobject.name.split(" ")[1]);
console.log(jsontoobject.doj.split("-"));
console.log(jsontoobject.doj[length-1]);

