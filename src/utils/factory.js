
// 工厂模式
// 工厂模式Factory
// 假设- -个场景:运动装备网店，它自己没有产品，等用户下单后，它需要找比如Nike,Adidas这样的工厂生产(设它们是自己生产的)，然后发售
// 着装
class Clothing {
  constructor(params) {
    this.factory = params.factory
    this.type = params.type
    this.size = params.size
    this.price = params.price
    this.color = params.color
  }
  
  publish() {
    console.log('factory:' + this.factory, 'type:' + this.type, 'size:' + this.size,'price:' + this.price)    
  }
}

//抽象工厂，把抽象工厂暴露出去
 export default class AbstractFactory {
  static produce(params) {
    console.log('选择工厂')
    this.factory;
    if (params.factory === 'NikeFactory'){
      this.factory = NikeFactory;
    } else if (params.factory === 'AdidasFactory') {
      this.factory = AdidasFactory;
    }
    //返回之前，可以抽象工厂的逻辑处理
    return this.factory.produce(params);
  }
}
// Nike工厂
class NikeFactory {
  static produce(params) {
  console.log('nike工厂')
  this.equipment
  if (params.type === 'NikeTshirts') {
    this.equipment = NikeTShirts
  } else if (params.type === 'NikeJacket') {
    console.log(11)
    this.equipment = NikeJacket
  }
  console.log(this.equipment)

  // 返回之前，可以做nike工厂的逻辑处理
  return new this.equipment(params);
  }
}

 //adidas 工厂
class AdidasFactory {
  static produce(params) {
    this.equipment;
    if (params.type === 'AdidasShoes'){
    this.equipment = AdidasShoes;
  } else if (params.type === 'AdidasCap') {
    this.equipment = AdidasCap;
  }
  //返回之前，可以做adidas工厂的逻辑处理
  return new this.equipment(params);
  }
}

 //nike T 恤
class NikeTShirts extends Clothing {
}
//nike 冲锋衣
class NikeJacket extends Clothing {
  constructor(params) {
    super(params)
    console.log('nikeJacket')
  }

  doSomething() {
    console.log('dosomething')
  }
  changeSize(value) {
    this.size = value
  }
}
//adidas 鞋
class AdidasShoes extends Clothing {
}
//adidas 帽子
class AdidasCap extends Clothing {
}


