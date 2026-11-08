var string = "1234567890ABCDEFGHIJKabcdefghijk",

    result = string.replace(/[^0-9]/g, "@");

console.log(result);

