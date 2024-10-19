function Add(numbers) {
    // if empty string returns 0
    if (numbers === "") return 0;

    // checking for custom delimiter starting with "//" 
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0].substring(2)}]`);
        numbers = parts[1];
    }

    const numbersArray = numbers.split(delimiter);

    // checking if negative numbers and throwing error
    const negatives = numbersArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numbersArray.filter(num => num <= 1000).reduce((acc, num) => acc + Number(num), 0);
}

module.exports = Add;