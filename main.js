const nums = [2, 4, 9, 10, 45, 67, 8, 90];

const juftSonlar = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) { 
    juftSonlar.push(nums[i]);
  }
}

console.log("Juft sonlar:", juftSonlar);
   
