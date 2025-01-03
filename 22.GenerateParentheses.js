function generateParenthesis(n) {
    let ketQua = [];
    function sinh(tam, mo, dong) {
        if (tam.length === 2 * n) {
            ketQua.push(tam);
            return;
        }
        if (mo < n) sinh(tam + '(', mo + 1, dong);
        if (dong < mo) sinh(tam + ')', mo, dong + 1);
    }
    sinh('', 0, 0);
    return ketQua;
}

// Example
console.log(generateParenthesis(3));
