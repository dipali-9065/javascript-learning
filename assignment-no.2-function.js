function sayhello()
{
    console.log("hii dipali");
    
    
}
sayhello()

function how()
{
    console.log("how are you");
    console.log("-----------------------------")
    
    
}
how()

function personalDetails(firstname, lastname, collagename)
    {
        console.log( " My first name is:Dipali");
        console.log( " My last name is:yerekar");
        console.log( " My collage name is:Darda collage");
        console.log("-----------------------------")
        

    }
    personalDetails()



    function addThreeValue(n1,n2,n3,n4)
    {
        console.log("Four value are :",n1,n2,n3,n4);
       var result= n1+n2+n3+n4;
        console.log( "RESULT:",result)
    }
    addThreeValue(10,23,600,48)

    addThreeValue("Hello", "hii" ,"bye", "gpodnight");




    let studentJenny = {
        fullName : "Jenny",
        email: "jenny@gmail.com",
        qualification: "BE CSC",
        isMarried: true,
        age: 55
    }
    
    const keys = Object.keys(studentJenny);
    console.log(keys);
    
    const values = Object.values(studentJenny);
    console.log(values);
    
    console.log(`======== Traversing Object ============`);
    
    for (const key in studentJenny) {
        if (Object.prototype.hasOwnProperty.call(studentJenny, key)) {
            const element = studentJenny[key];
            console.log( `${key}, =>   ${element}`);
        }
    }
    
    console.log(`======== in operator ============`);
    console.log("age" in studentJenny );
    console.log("city" in studentJenny );



    

   
