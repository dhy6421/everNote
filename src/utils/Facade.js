// 外观模式：
// 为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

// 主要解决：降低访问复杂系统的内部子系统时的复杂度，简化客户端与之的接口。

// 模拟电脑启动，假设电脑启动顺序：启动CPU，启动内存，启动硬盘，加载数据等。
  
class CPU {
  startup() {
    console.log("启动CPU")
  }
}

class Memory {
  startup() {
    console.log("启动Memory");
  };
}
class Disk{
  startup() {
    console.log("启动Disk");
  };
}
export default class Computer {
  constructor() {
    this._cpu = new CPU()
    this._disk = new Disk()
    this._memory = new Memory()
  }
  cpuStart(){
    this._cpu.startup()
  }
  memoryStart(){
    this._memory.startup()
  }
  diskStart(){
    this._disk.startup()
  }
}
