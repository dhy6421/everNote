// 抽象类
class Abstraction {
  constructor() {
    console.log('Abstraction Class created 创建抽象类');
  }

  operation() {
    console.log('Abstraction.operation invoked 抽象列操作被调用');
    this.imp.operationImp();
  }
}
// 实现接口类
class Implementor {
  constructor() {
    console.log('Implementor Class created 实现接口创建');
  }

  operationImp() {
    console.log('Implementor.operationImp invoked');
  }
}

export default {
  refinedAbstraction: // 扩充抽象类
  class RefinedAbstraction extends Abstraction {
    constructor() {
      super()
      console.log('RefinedAbstraction Class created');
    }
  
    setImp(imp) {
      console.log('RefinedAbstraction.setImp invoked');
      this.imp = imp
    }
  },
  concreteImplementorA: // 具体实体类
  class ConcreteImplementorA extends Implementor {
    constructor() {
      super()
      console.log('ConcreteImplementorA Class created 实体类A被创建');
    }
  
    operationImp() {
      console.log('ConcreteImplementorA.operationImp invoked');
    }
  },
  concreteImplementorB: // 具体实体类
  class ConcreteImplementorB extends Implementor {
    constructor() {
      super()
      console.log('ConcreteImplementorB Class created 实体类B被创建');
    }
  
    operationImp() {
      console.log('ConcreteImplementorB.operationImp invoked');
    }
  }

}


