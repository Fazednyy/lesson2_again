let cube = document.getElementById('cube').value;
let circle = document.getElementById('circle').value;
let rhombus = document.getElementById('rhombus');
let triangle = document.getElementById('triangle');
let col = document.getElementById('col').value
let pai = document.getElementById('paint');
console.log(col)

// 1)
let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect (50, 25, 100, 100);

// 2)
let canvas1 = document.getElementById('canvas1') 
const ctx1 = canvas1.getContext('2d');
ctx1.beginPath();
	ctx1.arc(150, 75, 50, 0, 2*Math.PI, false);
	ctx1.fill();
	ctx1.lineWidth = 1;
	ctx1.stroke();
let math = document.getElementById('math').val
let input = document.getElementsByTagName('input')

// pai.onclick = function (e){
    
//     if(cube){
//         const fff = pai.getContext('2d');
//         fff.fillStyle = col;
//         fff.fillRect (e.pageX, e.pageY, 50, 50);
       

//     }
//     if(circle){
//  const fff = pai.getContext('2d');
// fff.beginPath();
// 	fff.arc(150, 75, 50, 0, 2*Math.PI, false);
// 	fff.fill();
// 	fff.lineWidth = 1;
//     fff.fillStyle = col;
//     } 
// }