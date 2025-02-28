/**
 * Calculate the sum from 1 to n using a loop.
 * Time Complexity: O(n)
 */
function sumToNA(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Calculate the sum from 1 to n using math formula.
 * Time Complexity: O(1)
 */
function sumToNB(n: number): number {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
}

/**
 * Calculate the sum from 1 to n using recursion
 * Time Complexity: O(n) - less efficient, can cause error because of call stack limit
 */
function sumToNC(n: number): number {
    if (n <= 0) return 0;
    return n + sumToNC(n - 1);
}

export {sumToNA, sumToNB, sumToNC}