class SVG {
    constructor(){
        this.shape=""
        this.text=""
        this.textColor=""
    }

    setShape(userShape){
        this.shape=userShape
    }

    setText(userText){
        this.text=userText

    }  
    setTextColor(userTextColor){
        this.textColor=userTextColor
    }


    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       ${this.shape}
        <text x="150" y="125" font-size ="60" text-anchor= "middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
      

    }
}

module.exports = SVG
