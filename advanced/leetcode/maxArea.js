var maxArea = function (height) {
    i = 0;
    j = height.length - 1
    max = 0
    minim = 9
    while(i < j){
        minim = Math.min(height[i], height[j])
        h = j - i
        area = minim * h 
        max = Math.max(max, area)
        if(height[i] < height[j]) i++
        else j--
    }
    return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
