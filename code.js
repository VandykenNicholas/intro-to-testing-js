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


