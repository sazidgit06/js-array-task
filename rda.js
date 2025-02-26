function rda(arr){
    let newArr = [];
    for(const name of arr){
        if(newArr.includes(name) === false){
            newArr.push(name);
        }
    }
    return newArr;
}


const arr = ['shamima', 'sazid', 'humira', 'shamima', 'sazid', 'humira', 'galib', 'rejoan'];
const res = rda(arr);
console.log(res);