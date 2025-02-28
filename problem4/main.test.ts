import { sumToNA, sumToNB, sumToNC } from './main';

describe("function sumToNA", () => {
    it('should return 0 for negative input', () => {
        expect(sumToNA(-1)).toBe(0)
    })

    it('should return 0 for input 0', () => {
        expect(sumToNA(0)).toBe(0)
    })

    it('should return correct result for positive numbers', () => {
        expect(sumToNA(5)).toBe(15)
    })
})

describe("function sumToNB", () => {
    it('should return 0 for negative input', () => {
        expect(sumToNB(-1)).toBe(0)
    })

    it('should return 0 for input 0', () => {
        expect(sumToNB(0)).toBe(0)
    })

    it('should return correct result for positive numbers', () => {
        expect(sumToNB(5)).toBe(15)
    })
})

describe("function sumToNC", () => {
    it('should return 0 for negative input', () => {
        expect(sumToNC(-1)).toBe(0)
    })

    it('should return 0 for input 0', () => {
        expect(sumToNC(0)).toBe(0)
    })

    it('should return correct result for positive numbers', () => {
        expect(sumToNC(5)).toBe(15)
    })
})