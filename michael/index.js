
    var xPos = 0;
    var yPos = 0;

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                moveLeft();
                break;
            case 38:
                moveUp();
                break;
            case 39:
                moveRight();
                break;
            case 40:
                moveDown();
        }
    };

    function moveLeft(){
        if (xPos>0){
            xPos-=10;
            document.getElementById('michael').style.left = xPos + 'px';
        }
    };

    function moveRight(){
        if (xPos<=300) {
            xPos+=10;
            document.getElementById('michael').style.left = xPos + 'px';
        }
    };

    function moveUp(){
        if (yPos>0) {
            yPos-=10;
            document.getElementById('michael').style.top = yPos + 'px';        
        }

    };

    function moveDown(){
        if(yPos<=285) {
            yPos +=10;
            document.getElementById('michael').style.top = yPos + 'px';
        }
    };

        
    