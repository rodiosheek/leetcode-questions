export const decodeRomanNumber = roman => {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let tmp = 0;

    let romanArray = roman.split('');

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;

    for(let i = 0; i < romanArray.length; i++) {
        const action = romanArray[i] > romanArray[i + 1] ? add : sub;

        tmp = action(tmp, romanArray[i]);
    }

    console.log(tmp);

    return tmp;
}