var nums1 = [1, 3] 
var nums2 = [2, 4, 5]
// merge nums1 & nums1 and sort the merged array
var merged_array = nums1.concat(nums2).sort();
// calculate length of merged array
var ln = merged_array.length;
//check if the length is odd or even
if (ln % 2 != 0) {
    var index_median = Math.floor(ln / 2);
    var median = merged_array[index_median];
    return median;
} else {
    // if length is even, we will do
    // the sum of first and second median divide
    // by two
    var first_index = ln / 2;
    var second_index = first_index - 1;
    var median = (merged_array[first_index] + merged_array[second_index]) / 2;
    return median;
}
