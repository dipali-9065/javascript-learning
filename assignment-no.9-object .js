let professor = {
    fullName : "dipali yerekar",
    dateofbirth: "9 jan 2000",
    email: "dipaliyerekar123@.com",
    qualification: "BE CSC",
    gender: "female",
    dateofbirth: "9 jan 2000",
    hobbies: ["reading", "travelling", "suffering through internet"],
    certificate:["Hacker Rank participation","Certificate in IFE course","Certificate in ADV programming"],
   
    details:function(){
        console.log(`------ professor ${this.fullName} Details is:------`);
        console.log(`dateofbirth: ${this.dateofbirth}, email : ${this.email}`);
        console.log(`gender: ${this.gender}, Hobbies: ${this.hobbies}`);
    }
    }
    professor.details();

    console.log("=====add property like totalexperince====")
    professor.totalexperince="14 years";
   console.log(professor);

   console.log("======Modify and existing property and log on console (eg: name )====")
   professor.fullName ="kiran khelkar";
   console.log(professor)

   console.log("====Add new one certificate like Oracle ceriticate in 2index of array==");
   professor.certificate.splice(2,0,"Oracle certified")
   console.log(professor.certificate)

   console.log("==== log the last element of array====");
   console.log(professor.certificate[professor.certificate.length-1]);

   console.log("==== Traverse the array using for loop===");
   const arraycertificate = professor.certificate;

    for (const element of arraycertificate) {

    console.log(element);

}






