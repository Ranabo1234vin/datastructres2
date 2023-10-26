let x=[1,2,3,4,5,6,7];
let y=x.length;
let z=x[0]
for(let i=0;i<y;i++)
{
x[i]=x[i+1];
}
x[y-1]=z;
console.log(x)



