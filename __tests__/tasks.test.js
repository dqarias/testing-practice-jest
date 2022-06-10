const {stringLength, reverseString, Calculator, capitalize} = require('../src/index.js');

test('comparing string length', ()=>{
    const test = 'Ronald'
    expect(stringLength(test)).toBe(6)
})

test('string greater that ten characters',()=>{
    const test = 'Procrastination'
    expect(()=>stringLength(test)).toThrow(Error)
})

test('Reversing a string', ()=>{
    const test = 'Ronald'
    expect(reverseString(test)).toBe('dlanoR')
})

test('Reversing a string', ()=>{
    const test = 'Friend'
    expect(reverseString(test)).toMatch(/dneirF/)
})

describe('Adding numbers tests', () => {
    test('10 plus 5 returns 15', () => {
        expect(Calculator.add(10,5)).toBe(15);
    });
    test('5 plus 7 returns 15', () => {
        expect(Calculator.add(5,7)).toBe(12);
    });
    test('5 plus -7 returns -2', () => {
        expect(Calculator.add(5,-7)).toBe(-2);
    });
  
  });

  describe('Substracting number test',() => {
    test('10 minus 5 returns 5', () => {
        expect(Calculator.sustract(10,5)).toBe(5)
    })
    test('10 minus -5 returns 15', () => {
        expect(Calculator.sustract(10,-5)).toBe(15)
    })
    test('40 minus 5 returns 35', () => {
        expect(Calculator.sustract(40,5)).toBe(35)
    })
  })

  describe('Multipyng number test',() => {
    test('10 times 5 returns 50', () => {
        expect(Calculator.multiply(10,5)).toBe(50)
    })
    test('10 times -5 returns -50', () => {
        expect(Calculator.multiply(10,-5)).toBe(-50)
    })
    test('10 times 0 returns 0', () => {
        expect(Calculator.multiply(10,0)).toBe(0)
    })
    
  })

  describe('Dividing number test',() => {
    test('10 divide 5 returns 2', () => {
        expect(Calculator.divide(10,5)).toBe(2)
    })
    test('60 divide 5 returns 12', () => {
        expect(Calculator.divide(60,5)).toBe(12)
    })
    test('60 divide 0 returns Error', () => {
        expect(()=>Calculator.divide(60,0)).toThrow(Error)
    })
    
  })

    describe('Testing Capitalize string',() => {
        test('First testing', () => {
            const string = 'Ronald'
            expect(capitalize(string)).toBe('Ronald')
        })
        test('second testing', () => {
            const string = 'peru'
            expect(capitalize(string)).toBe('Peru')
        })
        test('second testing', () => {
            const string = 'paises'
            expect(capitalize(string)).toBe('Paises')
        })
    })