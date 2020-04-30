export const sumNum = (x, y) => {
  return parseInt(x) + parseInt(y);
};

export const multiplyNum = (x, y) => {
  return parseInt(x) * parseInt(y);
};

const isPrime = n => {
  if (n < 2) return false;
  const q = parseInt(Math.sqrt(n));
  for (let i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export const findPrimeNum = (n) => {
  let primeArr = [];
  let number = 1;
  while (primeArr.length < n) {
    if (isPrime(number)) {
      primeArr.push(number);
    }
    number++;
  }
  return primeArr;
}

export const findFibonnaciNum = n => {
  let a = 0, b = 1, temp;
  let fibonnaciArr = [];
  while (fibonnaciArr.length < n) {
    fibonnaciArr.push(a);
    temp = a;
    a = a + b;
    b = temp;
  }
  return fibonnaciArr;
}
