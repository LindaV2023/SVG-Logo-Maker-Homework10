class myShape {
    constructor(){
        this.color ="";
    }
    // constructor(shapeColor, shapeLetter, letterColor) {
    //     this.shapeColor = shapeColor;
    //     this.shapeLetter = shapeLetter;
    //     this.letterColor = letterColor;
    // }

    setColor(userColor){
        this.color = userColor
    }
          
    };

    class Circle extends myShape {
        render() {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        }
    }

    class Square extends myShape {
        render() {
            return `<rect x="50" y="20" width="200" height="200" fill=${this.color}/>`;
        }
    }

    class Triangle extends myShape {
        render() {
            return `<polygon points="100, 20 225, 225 0, 225" fill="${this.color}"/>`;
        }
    }

//module.exports = MyShape;
module.exports = {Circle, Square, Triangle};