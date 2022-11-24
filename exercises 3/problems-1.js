/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/


function isSortedAndHow(nums) {
    asc = true;
    desc = true;
    for (let i = 0; i < nums.length; i++) {
      if(nums[i + 1] <= nums[i]) {
        desc = false;
      }
      else if (nums[i+1] >= nums[i]){
        asc = false;
      }
    }
  
    if(asc){
      return "yes, descending"
    } else if(desc){
      return "yes, ascending"
    } else {
      return "no"
    }
  }

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow