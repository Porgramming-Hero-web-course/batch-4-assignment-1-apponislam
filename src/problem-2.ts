function removeDuplicates(numbers: number[]): number[] {
    const newArray: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!newArray.includes(numbers[i])) {
            newArray.push(numbers[i]);
        }
    }

    return newArray;
}

console.log(removeDuplicates([10, 1, 2, 2, 3, 4, 4, 5, 1, 6, 8, 9, 9, 9, 10, 10]));
