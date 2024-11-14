class Vehicle
{
    constructor(name , ManufacturingYear, Average , FuelType,color)
    {
         this.name=name;
         this.ManufacturingYear=ManufacturingYear;
         this.Average=Average;
         this.FuelType=FuelType;
         this.color=color

    }
    details()
    {
        
        console.log(`name: ${this.name}, ManufacturingYear: ${this.ManufacturingYear}, Average: ${this.Average},FuelType:${this.FuelType},color:${this.color}`);  
    
        
    }
}   console.log("vehicle marututi suzuki details");
    const maruti = new Vehicle("Maruti Suzuki", 2024, 20, "Diesel","Black");
    maruti.details();
    console.log("vehicle skoda details");
    const skoda = new Vehicle("skoda", 2022, 18, "petrol","Black");
    skoda.details();
    console.log("vehicle TATA details");
    const TATA=new Vehicle("TATA", 2022, 18, "petrol","white");
    skoda.details();
    console.log("vehicle Hyundai details");
    const Hyundai=new Vehicle("Hyundai", 2024, 22, "diesel","silver");
    skoda.details();
    console.log("vehicle Kia details");
    const kia=new Vehicle("kia", 2022, 19, "petrol","blue");
    skoda.details();

    console.log("----------Collage and its details------------");

    class collage
{
    constructor(name , location, EstablishYear , NumberOfStudent,code)
    {
         this.name=name;
         this.location=location;
         this.EstablishYear=EstablishYear;
         this.NumberOfStudent=NumberOfStudent;
         this.code=code

    }
    details()
    {
        
        console.log(`name: ${this.name}, location: ${this.location}, EstablishYear: ${this.EstablishYear},NumberOfStudent:${this.NumberOfStudent},code:${this.code}`);  
    
        
    }
}   console.log("Lokmany Tilak Collage details");
    const Lokmany = new Vehicle("Lokmany Tilak", "wani", 2001, 12000,1200089);
    Lokmany.details();

    console.log("Darda Collage details");
    const Darda = new Vehicle("Darda", "yavatmal", 1995, 49000,1890789);
    Darda.details();

    console.log("Jcoet Collage details");
    const Jcoet = new Vehicle("Jcoet", "yavatmal", 1967, 6700,7890789);
    Jcoet.details();

    console.log("Rammeghe Collage details");
    const Rammeghe = new Vehicle("Rammeghe", "Amravati", 1943, 54700,4090789);
    Rammeghe.details();

    console.log("Raisoni Collage details");
    const Raisoni = new Vehicle("Raisoni", "nagpur", 1765, 16700,3390789);
    Raisoni.details();




    


