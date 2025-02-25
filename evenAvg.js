function evenAvg(numbers){
    let evenArr = [];
    let sum = 0;
    for(const num of numbers){
        if(num % 2 === 0){
            evenArr.push(num);
            sum += num;
        }
    }
    const len = evenArr.length;
    return sum/len;
}


const numbers = [22, 43, 53, 32, 12, 44, 65, 67, 86];
const avg = evenAvg(numbers);
console.log(avg);