
// 在代理模式（Proxy Pattern）中，一个类代表另一个类的功能。这种类型的设计模式属于结构型模式。

// 在代理模式中，我们创建具有现有对象的对象，以便向外界提供功能接口。


class Real {
  doSomething() {
    console.log('do something...');
  }
}

class Proxy extends Real {
  constructor() {
    super();
  }

  doSomething() {
    setTimeout(super.doSomething, 1000 * 3);
  }
}

new Proxy().doSomething(); //after 3s ,do something...
