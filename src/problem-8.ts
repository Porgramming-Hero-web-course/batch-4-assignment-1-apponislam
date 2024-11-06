function validateKeys<T>(object: object, keys: (keyof T)[]): boolean {
    for (const key of keys) {
        if (!(key in object)) {
            return false;
        }
    }
    return true;
}

const person2 = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(validateKeys(person2, ["name", "age"]));
console.log(validateKeys(person2, ["name", "address"]));
