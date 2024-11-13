
console.log("-----create object 'BankSbi with 4 properties-----");

banksbi=
{
    bankname:"hdfc",
    AcHolderName:"dipali Yerekar",
    AcNumber:12345678901,
    IFSC : 1234678
}
console.log(banksbi);

console.log("----create object 'Banklocation' with properties-----");

bankLocation=
{
    street:"wani",
    city:" yavatmal",
    pin:445304,
    
}
console.log(bankLocation);


console.log("-----cloned banksbi and banklocation-----");

const bankclone = Object.assign({ }, banksbi, bankLocation);

console.log(bankclone);

console.log("----create the object rate of intrest---");

rateOfIntrest=
{
    homeloneIntrest:"14",
    personalLoneIntrest:"20%",
    dueIntrest:"19%"

}
console.log(rateOfIntrest);

console.log(" ----The bank details is---- ");

const sbidetails = Object.assign({ }, banksbi, bankLocation,rateOfIntrest);
console.log(sbidetails);

console.log("-----Traverse of sbi details using for in loop----");

for (const key in sbidetails) {
    if (sbidetails.hasOwnProperty(key)) {  // Make sure it's not an inherited property
      const value = sbidetails[key];  // Access the value using the key
      console.log(`${key}=> ${value}`);
    }}












