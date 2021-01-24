function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.position = 1;
    this.speed = 10; 
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
        this.left += this.speed;
        console.log('right: ' + this.left);      
    }
    this.moveDown = function(){
        this.top += this.speed;
        console.log('down: ' + this.top);
    }
    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('left: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= this.speed;
        console.log('up: ' + this.top);
    }
    this.maxMinWithHeight = function(){
        let value = 0;
        if(this.position == 1){
            while(this.left < (window.innerWidth - hero.size)){
                this.moveRight();
            }
            value = this.left;
            return value;
        }
        
    }
  }
  
  var hero = new Hero('carright.jpg', 20, 30, 100);
  
  function start(){
    if(hero.left < (window.innerWidth - hero.size) && hero.position == 1){
        if(hero.left == 990) 
        {
            hero.position = 2;
        }
        console.log(window.innerWidth-hero.size)
        hero.moveRight();
    }else if(hero.top < (window.innerHeight - hero.size) && hero.position == 2){
        if(hero.top == 520){
            hero.position = 3;
        }
        hero.moveDown();
    }else if(hero.left !=0 && hero.position == 3){
        if(hero.left == 10){
            hero.position = 4;
        }
        hero.moveLeft();
    }else if(hero.top !=0 && hero.position == 4){
        if(hero.top == 20){
            hero.position = 1;
        }
        hero.moveUp();
    }
    // console.log(hero.position);
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1);
  }
start();
