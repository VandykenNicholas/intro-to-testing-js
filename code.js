// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if (!isNaN(parseFloat(input)) || input === ``){
        return "Hello, World!"
    }
    else if ((typeof input === `string`)){
        return `Hello, ${input}!`;
    }
    else{
        return "Hello, World!";
    }
    
}

function isFive(input){
    return input === 5;
}

function isEven(input){
    return  parseFloat(input) % 2 === 0;
}

function isVowel(input){
    if (typeof input === `string`) {
        let str = input.toLowerCase();
        switch (str) {
            case `a`:
                return true;
            case `e`:
                return true;
            case `i`:
                return true;
            case `o`:
                return true;
            case `u`:
                return true;
            default:
                return false;
        }
    }
        else {
            return false;
        }
}

function add(x, y){
    if (isNaN(x) || isNaN(y)) {
        return isNaN;
    }
    else{
        return parseFloat(x)+parseFloat(y);
    }
    
}


