function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}

const numbers1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(numbers1, target1));

const numbers2 = [2, 7, 11, 15];
const target2 = 14;
console.log(twoSum(numbers2, target2));
