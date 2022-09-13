
let string="Naman";

let newstr ="";
for(let i=string.length-1;i>=0;i--){
    newstr+=string[i];
}
if(string==newstr){
    console.log('Yes');
}else{
    console.log('No');
}
