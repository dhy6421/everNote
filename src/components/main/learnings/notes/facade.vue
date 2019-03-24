<template>
  <div>
    <div>
      <h3>外观模式</h3>
      <h5>
        意图：为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。</br>
        主要解决：降低访问复杂系统的内部子系统时的复杂度，简化客户端与之的接口。</br>
        何时使用： 1、客户端不需要知道系统内部的复杂联系，整个系统只需提供一个"接待员"即可。 2、定义系统的入口。</br>
        电脑整机是 CPU、内存、硬盘的外观。
      </h5>
      <div>
        <button @click="creatComputer">初始化一个computer</button>
        <button @click="start">启动电脑</button>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
import Computer from '../../../../utils/Facade'
export default {
  data() {
    return {
      computer: {}
    }
  },
  methods: {
    creatComputer() {
      this.computer = new Computer()
    },
    start() {
      console.log(this.computer)
      this.computer.cpuStart()
      this.computer.memoryStart()
      this.computer.diskStart()
      console.log(this.computer)
    }
  }
}
</script>
