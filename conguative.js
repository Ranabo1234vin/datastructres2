const x=[1,1,0,1,1,1,0,1,1];
let count=0;
let max=0;
for(let i=0;i<x.length;i++)
{
    if(x[i]==1)
    {
        count++;
       max=Math.max(max,count)
    }
    else
    {
        count=0;
    }
}
console.log(max)
