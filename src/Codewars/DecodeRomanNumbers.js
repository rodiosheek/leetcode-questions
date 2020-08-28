const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

export const decodeRomanNumber = roman => {
    const mappedRoman = [...roman].map(num => dict[num]);
    const lenght = mappedRoman.length;
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;

    let res = 0;

    for(let i = 0; i < lenght; i++) {
        const prev = mappedRoman[i]
        const next = mappedRoman[i + 1] ? mappedRoman[i + 1] : 0;
        const action = prev >= next ? add : sub;

        res = action(res, prev);
    }

    return res;
}