function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const words = lowerCaseSentence.split(" ");

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === lowerCaseWord) {
            count++;
        }
    }

    return count;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript! typescript typescript", "typescript"));
