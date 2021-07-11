// Destructuring

let obj = {
    name: "Phuthipong",
    lastname: "Khoka",
    age: 20,
    salary: 15000,
}

let obj2 = {
    name: "Phatcharamani",
    lastname: "Ketkhuang",
    age: 25,
    salary: 15000,
}

const showdata = ({name, lastname, age, salary}) => ` สวัสดีคุณ ${name} ${lastname}
 ขณะนี้คุณมีอายุ ${age}
 เงินเดือนของคุณเท่ากับ ${salary}
`;

console.log(showdata(obj));
console.log(showdata(obj2));


// Spread Operator

const fun = (x, y, z) => x + y + z;

let num = [5, 6, 7];

let res = fun(...num); //...num   fun(5, 6, 7);

console.log(res);