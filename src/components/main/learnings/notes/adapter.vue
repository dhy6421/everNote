<template>
<div>
  <div>
    <h3>适配器模式</h3>
    <div>适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。</br>
      这种模式涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能
    </div>
    <button @click="this.use1">使用港式插头</button>
    <h4>{{say}}</h4>
    <button @click="this.use2">使用适配器转换再次使用</button>
  </div>
</div>
</template>
<script>
import Class from '../../../../utils/Adapter'
export default {
  data() {
    return {
      say: ''
    }
  },
  created() {
  },
  methods: {
    use1() {
      this.say = new Class.target().small()
    },
    use2() {
      let adaptee=new Class.adaptee();
      let adapter=new Class.adapter(adaptee);
      console.log(adapter)
      this.say = adapter.small(); //此处需调
    }
  }
}
</script>
