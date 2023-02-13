function unionArrays(arr1, arr2) {
  const combinedArr = arr1.concat(arr2);
  const uniqueArr = [...new Set(combinedArr)];
  return uniqueArr;
}

const arr = unionArrays([1,2,3], [2,3,4])
// console.log(arr)



function getTwoArray(nums, nums1) {
    const concatArray = nums.concat(nums1);
    const getUniqueArray = [...new Set(concatArray)];
    return getUniqueArray;
}

const findUniqueArray = getTwoArray([1, 1, 2, 3, 4], [1, 5, 6, 7])
// console.log(findUniqueArray)



function findSquaresOfArray(nums) {
    let newArray = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        const newArrayItems = num * num;
        newArray.push(newArrayItems)
    }
    return newArray
}
  
const result = findSquaresOfArray([1,2, 3, 4])
// console.log(result)


function findAndCountVowels(string) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let items = string[i]
      if (vowels.indexOf(items) !== -1) {
        count++;
      }
    }
    return count;
}
  
const findVowels = findAndCountVowels('hello')
console.log(findVowels)