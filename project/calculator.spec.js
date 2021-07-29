describe('calculator.js', function() {
    it('should add numbers to the total', function() {
        const calculator = new Calculator()
        calculator.add(5)
    
        expect(calculator.total).toBe(5)

    })

    it('should subtract numbers from total', function() {
        const calculator = new Calculator()
        calculator.total = 30
        calculator.subtract(5)
    
        expect(calculator.total).toBe(25)
    })
    
    it('should multiply numbers from total', function() {
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply(5)
    
        expect(calculator.total).toBe(100)
    })

    it('should divide numbers from total', function() {
        const calculator = new Calculator()
        calculator.total = 100
        calculator.divide(5)
    
        expect(calculator.total).toBe(20)
    })
})



