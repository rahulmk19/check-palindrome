
let string="Naman";

let newstr = '';
for(let i=string.length-1;i>=0;i--){
    newstr+=string[i];
}
if(string==newstr){
    console.log('Palindrom yes')
}else{
    console.log('NOt a plindrome')
};