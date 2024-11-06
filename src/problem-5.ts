// function getProperty<T>(obj: T, key: keyof T) {
//     return obj[key];

function getProperty<T>(object: T, key: keyof T) {
    return object[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
// console.log(getProperty(person, "address"));
