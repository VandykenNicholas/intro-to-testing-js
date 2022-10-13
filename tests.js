////// variables to test////

let person = {firstname: `nick`};


// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe(`sayHello`, function(){
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it(`should return "Hello, Jane!"`, function () {
        expect(sayHello(`Jane`)).toBe(`Hello, Jane!`)
    });
    it(`should return "Hello, Alex!"`, function () {
        expect(sayHello(`Alex`)).toBe(`Hello, Alex!`)
    });
    it(`should return "Hello, Pat!"`, function () {
        expect(sayHello(`Pat`)).toBe(`Hello, Pat!`)
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(`5`)).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(``)).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello([2, 3, 4])).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(person)).toBe("Hello, World!")
    });
    it(`should return Hello, World!`, function () {
        expect(sayHello(sayHello)).toBe("Hello, World!")
    });
    
});

describe(`isFive`, function (){
    it('should be a defined function', function() {
        expect(typeof (isFive())).toBe(`boolean`);
    });
    it('should return true', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true', function () {
        expect(isFive(`5`)).toBe(false);
    });
});


describe(`isEven`, function (){
    it('should be a defined function', function() {
        expect(typeof (isEven())).toBe(`boolean`);
    });
    it('should return true', function() {
        expect((isEven(2))).toBe(true);
    });
    it('should return true', function() {
        expect((isEven(-4))).toBe(true);
    });
    it('should return false', function() {
        expect((isEven(3))).toBe(false);
    });
    it('should return false', function() {
        expect((isEven(`banana`))).toBe(false);
    });
    it(' "8" should return true', function() {
        expect((isEven(`8`))).toBe(true);
    });
    it('should return false', function() {
        expect((isEven(Infinity))).toBe(false);
    });
    it('should return false', function() {
        expect((isEven(true))).toBe(false);
    });
    it('should return false', function() {
        expect((isEven(false))).toBe(false);
    });
    it('should return false', function() {
        expect((isEven())).toBe(false);
    });
});
describe(`IsVowel`, function (){
    it('should be a function that exists ', function () {
        expect(typeof isVowel).toBe(`function`)
    });
    it('Should return true ', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true ', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false ', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false ', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false ', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false ', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should return false ', function () {
        expect(isVowel(`banana`)).toBe(false)
    });
    it('should return false ', function () {
        expect(isVowel(`apple`)).toBe(false)
    });
    it('should return false ', function () {
        expect(isVowel(isVowel())).toBe(false)
    });
});
describe(`add`, function (){
    it('should be a function that exists ', function () {
        expect(typeof add).toBe(`function`)
    });
    it('should return a 5 ', function () {
        expect(add(2,3)).toBe(5)
    });
    it('should return a -12 ', function () {
        expect(add(-3,-9)).toBe(-12)
    });
    it('should return a 11 ', function () {
        expect(add(`5`,6)).toBe(11)
    });
    it('should return a 6 ', function () {
        expect(add(`-4`,'10')).toBe(6)
    });
    it('should return a NaN ', function () {
        expect(add('banana','split')).toBe(isNaN)
    });
    it('should return a NaN ', function () {
        expect(add(2,'apples')).toBe(isNaN)
    });
    it('should return a NaN ', function () {
        expect(add()).toBe(isNaN)
    });
    
});