function getElementWidth(content, padding, border) { 
    let cont = Number.parseFloat(content);
    let padd = Number.parseFloat(padding);
    let bord = Number.parseFloat(border);
    return cont + 2 * (padd + bord);
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
