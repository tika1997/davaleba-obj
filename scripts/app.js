let objects =[
    {
        objName:"phone",
        Price:1500,
        Rating:9.8,
    },
    {
        objName:"book",
        Price:15,
        Rating:9.0,
    },
    {
        objName:"car",
        Price:5000,
        Rating:9.5,
    },

]
console.log(objects);

prompt("რითი გსურთ გაფილტვრა(1 or 2,1=price,2=rating)");
prompt("რა ფასის ზემოთ გსურთ პროდუქტების ნახვა?(300");
prompt("რა რეიტინგის ზემოთ გსურთ პროდუქტების ნახვა?(3");


let object=objects.filter(object=> object.Price > 300);
console.log(object);
let object1=objects.filter(object=> object.Rating > 3);
console.log(object);