// sums the whole numbers from a to b and returns the sum

function sumAToB (a, b) {
    if (typeof a && typeof b !== "number") {
    throw "You need to input two numbers!"
    }

    var result = 0;

    if (a < b) {
    
    for (i = a; i <= b; i++) {
    result += i;
} else if (a > b) {
    for (i = b; i <= b; i++) {
    result += i;
} else {
    result = "Something went wrong. Please try again."
}
}
}

    return result;
}