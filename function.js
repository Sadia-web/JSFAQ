nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
    
}

// //even number

nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num % 2 == 0){
        console.log(num, ': is even number');
    }
    else{
        console.log(num * 2, ': is odd number');
    }   
}

// Function
function evenify(num){   
        if(num % 2 == 0){
            console.log(num, ': is even number');
        }
        else{
            console.log(num * 2, ': is odd number');
               }  
}
nums = [5, 12, 70, 40, 33];

for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    evenify(num)
}

///

friends_age = [13, 20, 40, 56];
for(let i = 0; i < friends_age.length; i++){
    const age = friends_age[i];
    evenify(age);
}



function evenify_all(nums){
    for (let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num, ': is even number');
        }
        else{
            console.log(num * 2, ': is odd number');
       } 
    }
}
nums = [5, 12, 70, 40, 33];
evenify_all(nums);

friends_age = [13, 17, 19, 20, 18];
console.log(friends_age);