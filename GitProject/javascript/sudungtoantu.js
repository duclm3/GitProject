let inputWidth;
let inputHeight;
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");
let width = parseInt(inputWidth);//Chuyển đổi kiểu dữ liệu sang interger
let height = parseInt(inputHeight);
let area = width * height;
document.write("Enter width: " + width );
document.write('<br/>')
document.write("Enter height: " + height);
document.write('<br/>')
document.write("The area is: " + area);