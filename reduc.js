/*1) Створити масив з 20 чисел та:
    a) відсортувати його від меншого до більшого.
    b) відсортувати його від більшого до меншого.
    c) Відфілтрувати числа які є кратними 3.
d) Відфілтрувати числа які є більшими за 10.
e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
f) За допомогою map збільшити кожен елемент в масиві в три рази.
    g) Порахувати загальну суму всіх елментів у масиві (reduce)*/

/*let sum = [4, 23, 7, 39, 19, 0, 9, 14,26,89, 10,14,52,41,52,6,48,78,4,63 ];*/
/*let numbers1 =sum.sort((a,b)=> {
    return b-a;
});
console.log(numbers1)*/

/*let numbers1 =sum.sort((a,b)=> {
    return a-b;
});
console.log(numbers1)*/

/*console.log(sum.filter(x=>!(x%3)));*/

/*console.log(sum.filter(x=>x>10));*/

/*sum.forEach(( element,index,array) => {
    console.log('a[' + index + '] = ' + element);
})*/
/*console.log(sum.map(x=>x*3));*/

/*let red = sum.reduce ((acc,currentValue)=>{
    return acc + currentValue
}, 0)
console.log(red);*/
/*2) Створити масив з 20 стрічок та:
    a) Відсортувати його в алфавітному порядку
b) Відсортувати в зворотньому порядку
c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'*/
/*const users = ['vasya', 'petya', 'kolya', 'olya', 'max', 'anya', 'oleg', 'andrey', 'masha','olya', 'max'];*/
/*let name =users.filter(x=>x.length>4);
console.log(name);*/
/*let name = users.map(x => {
    return 'Sam says '+ x
})
console.log(name);*/
/*3) Все робити тільки за допомогою методів масивів!
    Дано масив :*/
/*    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];*/
// відсортувати його за  віком (зростання , а потім окремо спадання)
/*users.sort((a,b)=>{
    let nameA=a.age;
    let nameB = b.age;
    if (nameA>nameB){
        return-1;
    }
    if(nameA>nameB){
        return 1;
    }
    return 0;
});
users.sort((a,b)=>a.age-b.age);
console.log(users);*/
// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
/*users.sort((a,b)=>a.name.length-b.name.length);
console.log(users);
users.sort((a,b)=>b.name.length-a.name.length);
console.log(users)
*/
// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),та
// зберегти це в новий масив (первинний масив залишиться без змін)
// відсортувати його за індентифікатором
/*let newUsers= users.map((x,i)=>({x,id:i+1}));
console.log(newUsers);*/
// Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
/*
let flat=users.reduce((acc,value) =>{
    if(value.isMarried === true  ){
        acc.push(value);
    }
    return acc;
}, []);
console.log(flat)*/

/*Задача: дан отсортированный по возрастанию массив целых чисел.
    Необходимо вернуть наименьший и наибольший индекс заданного элемента.
    Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
    Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

Пример:*/
   /*let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];*/
/* let Key = 1
Answer: MinIndex = 0, MaxIndex = 0.
let Key = 4
Answer: MinIndex = 3, MaxIndex = 6.*/
/*
let findMinMax =(array,key)=>{
    let minIndex = null;
    let maxIndex = 0;
    for (let i = 0; i <array.length; i++) {
       if (array[i]===key){
           if(!minIndex){
               minIndex=i;
           }
           maxIndex= i;
       }
    }
    return`Answer: MinIndex =${minIndex},MaxIndex =${maxIndex}`
}
console.log(findMinMax(Arr,4));
*/

/*Відфільтрувати масив за наступними крітеріями :
   - двигун більше 3х літрів
- двигун = 2л
- виробник мерс
- двигун більше 3х літрів + виробник мерседес
- двигун більше 3х літрів + виробник субару
- сили більше ніж 300
- сили більше ніж 300 + виробник субару
- мотор серіі ej
- сили більше ніж 300 + виробник субару + мотор серіі ej
- двигун меньше 3х літрів + виробник мерседес
- двигун більше 2л + сили більше 250
- сили більше 250  + виробник бмв*/
/*const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];*/
/*cars.reduce((acc,value) =>{
    if(value.volume > 3){
        console.log(value)
    }

    return acc;
},0);*/
/*let indexOfProd = cars.filter(cars=>cars.producer==='mercedes');
console.log(indexOfProd);*/
/*let resset = cars.filter(item => item.volume===2);
console.log(resset);*/
/* let indexOfProd = cars.filter(item=>item.producer ==='mercedes' && item.volume >3);
console.log(indexOfProd);*/
/*let indexOfProd = cars.filter(item=>item.producer==='subaru' &&  item.volume > 3);
console.log(indexOfProd);*/
/*let indexOfProd = cars.filter( el=>el.producer==='subaru' && el.power > 300);
console.log(indexOfProd);*/

/*let nameEngine=cars.filter(item => item.engine.startsWith('ej'));
console.log(nameEngine);*/
/* let indexOfProd = cars.filter(item=>item.producer ==='mercedes' && item.volume <3);
console.log(indexOfProd);*/
/*let indexOfProd = cars.filter(item=> item.volume > 2 && item.power > 250);
console.log(indexOfProd);*/
/*let indexOfProd = cars.filter( el=>el.producer==='bmw' && el.power > 250);
console.log(indexOfProd);*/

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

/*Відсортувати їх по ID*/
 /* let usersWithId = usersWithAddress.map((name,index)=>{ return{ id: index+1,name}});
  console.log(usersWithId);*/
/*-- Відсортувати їх по ID в зворотньому порядку*/
/*let strings =usersWithAddress.sort((a,b) =>{
    if(a < b){
        return 1
    } else {
        return -1
    }
});
console.log(strings)*/
/*-- Відсортувати по віку*/
/*usersWithAddress.forEach(element=>element.age = console.log(element.age))*/
/*-- Відсортувати по віку в зворотньому порядку*/
/*let reAge=usersWithAddress.sort((a,b)=>{
    let nameA=a.age;
    let nameB = b.age;
    if (nameA>nameB){
        return-1;

    }
    if(nameA>nameB){
        return 1;
    }
    return 0;
});
console.log(reAge)*/
/*-- Відсорутвати по імені*/
/*usersWithAddress.forEach(element=>element.name = console.log(element.name))*/
/*-- Відсорутвати по назві вулиці*/
/*let streetName=usersWithAddress.forEach(element=>element.street = console.log(element.street))*/
/*-- Відсорутвати по номеру будинку*/
/*let addresNum = usersWithAddress.filter((name,number) => {
    if (number > 0)
    return name
})
console.log(addresNum)*/
/*-- Залигити тільки тих, хто молодший ніж 30 (filter)*/
/*let ageThirty = usersWithAddress.filter(item => item.age <30);
console.log(ageThirty)*/
/*-- Залишити тільки одружених*/
/*let usMarried = usersWithAddress.filter(item => item.isMarried === true);
console.log(usMarried);*/
/*-- Залишити тільки одружених, які молодні за 30*/
/*let usMarriedAge = usersWithAddress.filter(item => item.isMarried === true && item.age <30);
console.log(usMarriedAge);*/
/*-- Залишити лише тих, в кого парні номери будинків.*/
/*let addresNum = usersWithAddress.filter((name,number) => {
    if (number % 2 === 0)
    return name
})
console.log(addresNum)*/
/*-- Порахувати загальний вік всіх людей. (reduce)*/
/*
let reduce = usersWithAddress.reduce ((acc,currentValue)=>{
    console.log(acc);
    console.log(currentValue);
    return acc + currentValue.age
}, 0)
console.log(reduce);*/
/*-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)*/
/*
usersWithAddress.reduce((acc,value) =>{
    if(value.age>30){
        value.isMarried = true;
        value.child=true;
        acc.push(value)
    }
    console.log(acc)
    return acc;
},[])
*/
