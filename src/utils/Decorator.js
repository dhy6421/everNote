// 我们的示例场景是这样的

// 首先创建一个普通的Man类，它的抵御值 2，攻击力为 3，血量为 3,也可自行定义参数
// 然后我们让其带上钢铁侠的盔甲，这样他的抵御力增加 100，变成 102；
// 让其带上光束手套，攻击力增加 50，变成 53；
// 最后让他增加“飞行”能力

// function decorateArmour(target, key, descriptor) {
//   const method = descriptor.value;
//   let moreDef = 100;
//   let ret;
//   descriptor.value = (...args)=>{
//     args[0] += moreDef;
//     ret = method.apply(target, args);
//     return ret;
//   }
//   return descriptor;
// }

// class Man{
//   constructor(def = 2,atk = 3,hp = 3){
//     this.init(def,atk,hp);
//   }

//   @decorateArmour
//   init(def,atk,hp){
//     this.def = def; // 防御值
//     this.atk = atk;  // 攻击力
//     this.hp = hp;  // 血量
//   }
//   toString(){
//     return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
//   }
// }
export default class Man{
  constructor(params){
    this.init(params);
  }

  init(params){
    this.def = params.def; // 防御值
    this.atk = params.atk;  // 攻击力
    this.hp = params.hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

class People {
  constructor() {
    this.country = 'China'
    console.log('Component Class created');
  }

  operation() {
      console.log('Component.operation invoked');
  }
}

class ConcretePeople extends People {
  constructor() {
      super();
      this.gender = 'man'
      console.log('ConcreteComponent Class created');
  }

  operation() {
      console.log('ConcreteComponent.operation invoked');
  }
}

class Decorator extends People {
  constructor(component) {
      super();
      this.component = component;
      console.log('Decorator Class created');
  }

  operation() {
      console.log('Decorator.operation invoked');
      this.component.operation()
  }
}

class ConcreteDecoratorA extends Decorator {
  constructor(component, sign) {
      super(component);
      this.addedState = sign;
      console.log('ConcreteDecoratorA Class created');
  }

  operation() {
      super.operation();
      console.log('ConcreteDecoratorA.operation invoked');
      console.log(this.addedState)
  }
}

class ConcreteDecoratorB extends Decorator {
  constructor(component, sign) {
      super(component);
      this.addedState = sign;
      console.log('ConcreteDecoratorB Class created');
  }

  operation() {
      super.operation();
      console.log('ConcreteDecoratorB.operation invoked');
      console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState);
  }

  addedBehavior() {
      this.operation();
      console.log('ConcreteDecoratorB.operation invoked');
  }
}



