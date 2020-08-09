function explain_callback(name,age,task){
    console.log('Hello ', name);
    console.log('Your age is', age);
    task();

}
function washHand(){
    console.log('wash hand regularly');
}
function takeShower(){
    console.log('Take Shower!');
}
function scrollFacebook(){
    console.log('Very busy with Facebook')
}

explain_callback('mim', 20, washHand);
explain_callback('Lingkon', 21, takeShower);
explain_callback('Relative',20, scrollFacebook );