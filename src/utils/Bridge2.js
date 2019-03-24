class DrawAPI {
  drawCircle(radius,x, y){
   throw "抽象方法"
  }
}
// 实体接口
class Shape {
  constructor(drawAPI) {
    this.drawAPI = drawAPI;
  }
  draw(){
    this.drawAPI.drawCircle(this.x,this.y,this.radius)
  }
}
export default {
  circle: class Circle extends Shape{
    constructor(x, y, radius,drawAPI){
      super(drawAPI);
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  },
  redCircle: class RedCircle extends DrawAPI {
    drawCircle( radius,  x,  y) {
      console.log("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
  },
  greenCircle: class GreenCircle extends DrawAPI {
    drawCircle( radius,  x,  y) {
      console.log("Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ",y: " + y + "]");
    }
  }
}
