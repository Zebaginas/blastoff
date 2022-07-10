

// for(let i = 10; i >= 0; i--)
// {  
//     const output = document.querySelector('.output');
//     if(i == 10)
//     {
//     const para = document.createElement('p');
//     output.appendChild(para);
//     para.textContent = "Countdown " + ${i};
//     }
//     else if(i != 0 && i < 10)
//     {
//         const para = document.createElement('p');
//     output.appendChild(para);
//     para.textContent =  ${i};
//     }
//     else 
//     {
//         const para = document.createElement('p');
//         output.appendChild(para);
//         para.textContent =  "Blast off!"; 
//     }
// }
const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
 const para = document.createElement('p');
 if (i === 10) {
 para.textContent = `Countdown ${i}`;
 } else if (i === 0) {
  para.textContent = 'Blast off!';
 } else {
 para.textContent = i;
 }

 output.appendChild(para);

 i--;
}