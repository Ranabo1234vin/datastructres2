let x=[1,2,3,4,5,6,7];
let y=x.length-1;
let temp=x[y];
for(let i=y;i>=0;i--)
{
   x[i]=x[i-1]
}
x[0]=temp;
console.log(x)