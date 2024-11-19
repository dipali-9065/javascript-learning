
console.log("==== no argument and no return any value");

let greet=()=>
{
    console.log("Good Morning , Today is Friday");
    
}
greet();

console.log("==== with arguments and no return any value====");

let multiplication=(n1,n2,n3)=>
    {
        console.log(`Multiplication of (5,5,2) is ${n1*n2*n3}`);

        
    }
    multiplication(5,5,2);

    let multiplication1=(n1,n2,n3)=>
        {
            console.log(`Multiplication of (10,4,1) is ${n1*n2*n3}`);
    
            
        }
        multiplication1(10,4,1);


        console.log("==== function with 5 argument====");


        let  sum=(n1,n2,n3,n4,n5)=>
            {
                console.log(`sum of (100,100,200,349,756) is ${n1+n2+n3+n4+n5}`);
                let result=n1+n2+n3+n4+n5;
                return result;
            }
            let Result=sum(100,100,200,349,756);

       
         console.log("====The concetation of string====");

         let conact = (str1, str2, str3, str4, str5) => {
        let result1 = str1 + str2 + str3 + str4 + str5;  
        return result1;
         };
    
        let Result1 = conact("I am", " learning", " ES6", " Feature ", "in depth");
         console.log(Result1); 
        

        
           
            



