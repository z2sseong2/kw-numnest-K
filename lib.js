function avg(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Insufficient parameter!"; // 빈 배열이나 잘못된 입력에 대한 처리
    }
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if (num <= 1) return false; // 1 이하의 숫자는 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true;
}
function factorial(num) {
    if (num < 0) return -1; // 음수 입력에 대한 처리
    if (num === 0 || num === 1) return 1; // 0!과 1!은 1
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; // 팩토리얼 계산
    }
    return result;
}
module.exports = {
    avg,
    prime,
    factorial
}