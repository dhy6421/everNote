// 目标角色实现
class Target {
  small(){
    // throw new Error('This method must be overwritten!');
    return '大陆不能使用港式插头'
  }
}

export default {
  target: // 目标角色实现
  class Target {
    small(){
      // throw new Error('This method must be overwritten!');
      return '大陆不能使用港式插头'
    }
  },
  // 源角色实现
  adaptee: class Adaptee {
    big(){
      // console.log("可用港式的电器插头");
      return '可用港式的电器插头'
    }
  },
  // 适配器实现
  adapter: class Adapter extends Target {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
    small() {
      this.adaptee.big();
    }
  }
} 

