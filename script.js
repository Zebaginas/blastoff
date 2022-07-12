let output = document.querySelector(".output");

for(let i = 10; i >= 0; i--)
{
const para = document.createElement('p');
    if(i == 10)
    {
        para.textContent = "Countdown " + String(i);
    }
    else if(i == 0)
    {
        para.textContent = "BlastOff!";
    }
    else{para.textContent = i;}
    
    output.appendChild(para);

}