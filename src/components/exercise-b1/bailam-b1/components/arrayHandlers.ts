export function countChiaHetCho3(numbers: number[]): number {
  let count = 0;
  numbers.map((item) => {
    if (item % 3 === 0) {
      count++;
      return count;
    }
  });
  return count;
  //  const result =  numbers.filter(item=>item % 3 === 0)
  //   return result.length
}

export function sum(numbers: number[]): number {
  let sum = 0;
  numbers.forEach((item) => {
    sum += item;

  });

  return sum;
}

export function hasNumber10(numbers: number[]): boolean {
  // Làm Bài Tại Đây
  const check = numbers.includes(10);
  //const result = numbers.find(item=>item === 10);
  // return result ? true : false;
  return check ? true : false;
}

export function filterChiaHetCho7(numbers: number[]): number[] {
  // Làm Bài Tại Đây
  const result = numbers.filter(numb => numb % 7 === 0);
  return result;
}
