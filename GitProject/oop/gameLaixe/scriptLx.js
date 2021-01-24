/**
 * Created by nhatnk on 6/27/17.
 */
const GAMEBOARD_WIDTH = 500;
const GAMEBOARD_HEIGHT = 500;

const ORIENTATION_LEFT = "carleft";
const ORIENTATION_RIGHT = "carright";
const ORIENTATION_UP = "carup";
const ORIENTATION_DOWN = "cardown";

const NINJA_WIDTH = 59;
const NINJA_HEIGHT = 86;

const DEFAULT_NINJA_X_POSITION = 100;
const DEFAULT_NINJA_Y_POSITION = 100;
const DEFAULT_NINJA_ORIENTATION = ORIENTATION_DOWN;
const DEFAULT_NINJA_SPEED = 20;
const MAX_SPEED_NINJA = 600;

function Ninja(){
    this.xPosition = DEFAULT_NINJA_X_POSITION;
    this.yPosition = DEFAULT_NINJA_Y_POSITION;
    this.orientation = ORIENTATION_DOWN;
    this.speed = DEFAULT_NINJA_SPEED;
    this.step = 1;
    
    this.buildImage = function(){
        this.image = this.orientation + '.jpg';
    };

    this.buildImage();

    //Thay đổi vị trí của ảnh theo một hướng nhất định,ứng với các ảnh down hoặc left;
    //Nếu là ảnh Down tăng y;
    //Nếu là ảnh up giảm y;
    //Nếu là ảnh right tăng x;
    //Nếu là ảnh left giảm x;
    this.move = function(){
        switch (this.orientation) {
            case ORIENTATION_DOWN:
                if(this.yPosition == 400){
                    break;
                }
                this.yPosition += this.speed;
                break;
            case ORIENTATION_UP:
                if(this.yPosition == 0){
                    break;
                }
                this.yPosition -= this.speed;
                break;
            case ORIENTATION_LEFT:
                if(this.xPosition == 0){
                    break;
                }
                this.xPosition -= this.speed;
                break;
            case ORIENTATION_RIGHT:
                console.log(this.xPosition);
                if(this.xPosition == 400){
                    break;
                }
                this.xPosition += this.speed;
                break;
        }
        this.buildImage();
    };

    this.turn = function(orientation){
        this.orientation = orientation;
        this.buildImage();
    };
    //Hiển thị ảnh
    this.show = function(ctx){
        var image = new Image();
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        image.onload = function(){
            ctx.drawImage(image, xPosition, yPosition);
        };
        image.src = './image/' + this.image;
    }
}

function GameBoard() {
    this.ninja = new Ninja();
    this.circle = new Circle();
    this.ctx = undefined;
    this.start = function(){
        this.ctx = document.getElementById('gameCanvas').getContext('2d');
        this.ninja.show(this.ctx);
    };
    //Xoá toàn bộ trong khung hình
    this.render = function(){
        this.ctx.clearRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
        this.ninja.show(this.ctx);
        this.drawCircle();
    };
    this.drawCircle= function(){        
        this.circle.radius = 20;//Random bán kính trong khoảng từ 0 - 80;
        this.circle.x = Math.random() * 400;// Random toạ độ x,y
        this.circle.y = Math.random() * 400;        
        this.ctx.beginPath();
        this.ctx.arc(this.circle.x, this.circle.y,  this.circle.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "yellow"; 
        this.ctx.fill();
    }
    //Thay đổi hướng ảnh
    this.moveNinja = function(event){
        var orientation = 0;
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }

        if(orientation){
            console.log("ninja:"+this.ninja.orientation)
            console.log("nomarl:"+orientation)
            //Nếu hướng của ô tô và phím vừa bấm thì 
            //hướng của oto bằng hướng của phím vừa bấm
            //Nếu cùng hướng thì tăng toạ độ
            if(this.ninja.orientation !== orientation){
                this.ninja.orientation = orientation;
            } else {
                this.ninja.move();
            }
            //Sau khi chạy 
            this.render();
        }
    }
}
function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

//Hàm getRandomHex() sẽ sinh ra một số ngẫu nhiên nằm trong khoảng 0-255.
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

//window.innerWidth và window.innerHeight là 2 thuộc tính trả về kích thước của cửa sổ trình duyệt.
function createCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    
    var radius = 80;//Random bán kính trong khoảng từ 0 - 80;
    var color = "yellow";
    var x = Math.random() * 400;// Random toạ độ x,y
    var y = Math.random() * 400;
    var circle= new Circle(x, y, radius);
    
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color; 
    ctx.fill();
}

var gameBoard = new GameBoard();
gameBoard.start();