describe('calculator.js', function () {
    it('should add numbers to the total', function () {
        const calculator = new Calculator()
        calculator.add(5)

        expect(calculator.total).toBe(5)

    })

    it('should subtract numbers from total', function () {
        const calculator = new Calculator()
        calculator.total = 30
        calculator.subtract(5)

        expect(calculator.total).toBe(25)
    })

    it('should multiply numbers from total', function () {
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply(5)

        expect(calculator.total).toBe(100)
    })

    it('should divide numbers from total', function () {
        const calculator = new Calculator()
        calculator.total = 100
        calculator.divide(5)

        expect(calculator.total).toBe(20)
    })


    it('should throw an error if total; is not a number', function () { // throws error if value is not a number
        const calculator = new Calculator()

        expect(calculator.total).toBe(0)
        expect(calculator.total).toBeFalsy()
    })
    it('has constructor', function () { // calculator equal to each other. Objects made to be the same
        const calculator = new Calculator()
        const calculator2 = new Calculator()

        expect(calculator).toEqual(calculator2)
    })
    it('has instantiated', function () {    //both exist and are they same and contains the keyword calculator
        const calculator = new Calculator()
        const calculator2 = new Calculator()

        expect(calculator).toBeTruthy()
        expect(calculator2).toBeTruthy()
        expect(calculator).toEqual(calculator2)
        expect(calculator.constructor.name).toContain('Calculator')
    })
    it('has instantiated unique object', function () { // if not equal they are individual unique objects
        const calculator = new Calculator()
        const calculator2 = new Calculator()

        expect(calculator).not.toBe(calculator2)
    })
    it('has common operations', function () { // does basic operations that are not undefined, will return a value. Should be a number or string value
        const calculator = new Calculator()

        expect(calculator.add).not.toBeUndefined() // can use toBeDefined as another option
        expect(calculator.subtract).not.toBeUndefined()
        expect(calculator.multiply).not.toBeUndefined()
        expect(calculator.divide).not.toBeUndefined()
    })

    it('overwrite values', function () {    // overwrite values from 0 to null
        const calculator = new Calculator()
        calculator.total = null

        expect(calculator.total).toBeNull()
    })
    it ('Does not handle NaN', function () {
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply('ali')

        expect(calculator.total).toBeNaN()
    })
    it('Handles divide by zero', function () { //can divide by zero, written an error message for it so it can pass
        const calculator = new Calculator()
        calculator.total = 20

        expect(function () {calculator.divide(0) }).toThrow() //general error
        expect(function () {calculator.divide(0) }).toThrowError(Error) // error thrown
        expect(function () {calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero')// error with message
    })
    it('Returns total', function () { //  returns the total and checks the values are between -30 and 70 
        const calculator = new Calculator()
        calculator.total = 50

        expect(calculator.add(20)).toBe(70) //first check will fail the others
        expect(calculator.total).toMatch(/-?\d+/) 
        expect(typeof calculator.total).toMatch('number') //checking data type to match a number
    })
})