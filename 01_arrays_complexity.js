function getFirstElemenet(arr){
    return arr[0]
}

// console.log(getFirstElemenet([5,4,3,6,7,8,3,2,6,7,9,3])) // O(1)

function sumAllelements(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}

sumAllelements([1,2,3,4,5]) // O(n)

function countPairs(arr){
    let count = 0;
    for (let i=0; i< arr.length; i++){
        // O(n)
        for (let j =0; j< arr.length; j++){
            // n * n
            count+=1
        }
    }

    return count

}

console.log(countPairs[1,2,3,4,5]) // O(n sq)