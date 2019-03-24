<template>
  <div>
    <div>
      <h3>组合模式</h3>
      <h5>
        意图：将对象组合成树形结构以表示"部分-整体"的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。</br>
        主要解决：它在我们树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以向处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。</br>
        何时使用：1、您想表示对象的部分-整体层次结构（树形结构）。 2、您希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。</br>
      </h5>
      <div>
        <button @click="composite1">创建组合1</button>
        <button @click="addGroup1">add组合1</button>
        <span>组合1名字--{{group1.name}}</span>
      </div>
      <div>
        <button @click="composite2">创建组合2</button>
        <button @click="addGroup2">将组合1作为组合2的leaf存放</button>
        <span>组合2名字--{{group2.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Class from '../../../../utils/Composite'
export default {
  data() {
    return {
      group1: {},
      group2: {}
    }
  },
  created() {
  },
  methods: {
    composite1() {
      this.group1 = new Class.composite('group1')
      console.log(this.group1)
    },
    composite2() {
      this.group2 = new Class.composite('group2')
    },
    addGroup1() {
      console.log(this.group1.children)
      this.group1.add(new Class.leaf('L1'))
      console.log(this.group1)
    },
    addGroup2() {
      this.group2.add(this.group1);
      console.log(this.group2)
      this.group1.getChild(1).operation();
      this.group2.operation();
    }
  }
}
</script>
