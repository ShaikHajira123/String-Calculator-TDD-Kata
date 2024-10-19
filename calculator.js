function Add(numbers) {
    // if empty string returns 0
    if (numbers === "") return 0;

    // checking for custom delimiter starting with "//" 
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const partOfDelimiter =  numbers.match(/\/\/(.*?)\n/)[1];
        if(partOfDelimiter.includes('[')) {
            // Split by square brackets, filter out empty elements, and escape special characters
            delimiter = new RegExp(partOfDelimiter.split(/\[|\]/)
            .filter(Boolean)
            .map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special characters
            .join("|"));
        }
        else {
            delimiter = new RegExp([`${partOfDelimiter}`]);
        }
       
        numbers = numbers.split("\n")[1]
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