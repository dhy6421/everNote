<template>
<div>
  <div>
    <h3>桥接模式</h3>
    <h5>使用场景： </br>1、如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的继承联系，通过桥接模式可以使它们在抽象层建立一个关联关系。</br>
      2、对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。</br>
      3、一个类存在两个独立变化的维度，且这两个维度都需要进行扩展</br>
    </h5>
    <button @click="bridge1">创建A</button>
    <button @click="bridge2">创建B</button>
    <button @click="circle1">画红色圆</button>
    <button @click="circle2">画绿色圆</button>
  </div>
</div>
</template>
<script>
import Class from '../../../../utils/Bridge'
import Class2 from '../../../../utils/Bridge2'
export default {
  data() {
    return {
      nikeJacket: {}
    }
  },
  created() {
  },
  methods: {
    bridge1() {
      let abstraction1 = new Class.refinedAbstraction();
      console.log(typeof abstraction1)
      abstraction1.setImp(new Class.concreteImplementorA());
      abstraction1.operation();
    },
    bridge2() {
      let abstraction2 = new Class.refinedAbstraction();
      console.log(typeof abstraction2)
      abstraction2.setImp(new Class.concreteImplementorB());
      abstraction2.operation();
    },
    circle1() {
      let redCircle = new Class2.circle(100, 90, 10, new Class2.redCircle());
      redCircle.draw()
    },
    circle2() {

    }
  }
}
</script>
