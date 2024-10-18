function Add(numbers) {
    if (numbers === "") return 0;

    const numbersArray = numbers.split(",");
    return numbersArray.reduce((acc, num) => acc + Number(num), 0);
}

module.exports = Add;