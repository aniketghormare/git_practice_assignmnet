let num=13;
let count=0;
for(let i=1;i<=num-1;i++){
      if(num%i==0){
             count++
}
if(count==2){
     console.log("peime");
}else if(count>2){
     console.log("not a prime")
}