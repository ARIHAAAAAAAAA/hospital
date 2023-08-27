class Shape {
    info(): string {
        return 'this is a shape'
    }
}

class Rectangle extends Shape {
    height
    width

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    area(): string {
        return `The area is ${this.height * this.width}`;
    }
    info(): string {
        return 'this is a rectangle'
    }

    scale(num: number = 2): this {

        this.height = this.height + num
        this.width = this.width + num
        return this
    }

    static combine(rectangle1: Rectangle, rectangle2: Rectangle):Rectangle {
        const newHeight = rectangle1.height + rectangle2.height
        const newWidth = rectangle1.width + rectangle2.width
        return new Rectangle(newHeight,newWidth)
    }
}

class Square extends Rectangle {
    rib

    constructor(rib: number) {
        super(rib, rib);
        this.rib = rib;
    }

    area(): string {
        return `The area is ${this.rib * this.rib}`;
    }

    info(): string {
        return 'this is square'
    }
}

class ColoredRectangle extends Rectangle {
    color
    constructor(color: string, height: number, width: number) {
        super(height, width)
        this.color = color
    }

    info(): string {
        return `this is ${this.color}  rectangle`
    }
}


class Shape2{
    constructor(){

    }
    draw(){
        console.log('drawing a shape');
    }
 
}

class Circle extends Shape2{
    constructor(){
        super()
    }
    draw(): void {
        console.log('drawing a circle')
    }
}

class Triangle extends Shape2{
    constructor(){
        super()
    }
    draw(): void {
        console.log('drawing a Triangle')
    }
}

class Square2 extends Shape2{
    constructor(){
        super()
    }
    draw(): void {
        console.log('drawing a Square2')
    }
}

function renderShapes (arr:Shape2[]){
    arr.forEach(element =>{
        element.draw()
    })
}



console.log(renderShapes([new Square2,new Triangle,new Circle]));


const myRectangle = new Rectangle(5, 10).scale();

console.log("Rectangle:");
console.log(myRectangle.area());

const mySquare = new Square(5);
console.log("\nSquare:");
console.log(mySquare.area());

const colorRectangle = new ColoredRectangle('red', 5, 3);
console.log(colorRectangle.info());
 

const rectangle1 = new Rectangle(4,4)
const rectangle2 = new Rectangle(5,5)
const newRectangle = Rectangle.combine(rectangle1,rectangle2)
console.log(newRectangle.area());
