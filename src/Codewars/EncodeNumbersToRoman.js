export const encodeNumbersToRoman = roman => {
    if (roman > 3999) {
        console.error('Max number', roman);
        return '';
    }

    const numberArrayRepresentation = `${roman}`.split('').reverse();

    const units = {
        one: 'I',
        five: 'V',
        ten: 'X'
    };

    const tens = {
        one: 'X',
        five: 'L',
        ten: 'C'
    };

    const hundreds = {
        one: 'C',
        five: 'D',
        ten: 'M'
    };

    const thousands = {
        one: 'M'
    };

    const romeSymbols = [
        units, // 0
        tens,  // 1
        hundreds,  // 2
        thousands, // 3
    ];

    let res = numberArrayRepresentation.map((num, index) => {
        num = parseInt(num);
        const one = romeSymbols[index].one;
        const five = romeSymbols[index].five;
        const ten = romeSymbols[index].ten;

        let tmp = '';

        if (1 <= num && num < 4) {
            tmp = ''.padEnd(num, one);
        }

        if (num === 4) {
            tmp = one + five;
        }

        if (num === 5) {
            tmp = five;
        }

        if (5 < num && num < 9) {
            let mid = num - 5;
            tmp = five + ''.padEnd(mid, one);
        }

        if (num === 9) {
            tmp = one + ten;
        }

        return tmp;
    })

    return res.reverse().join('');
}