<template>
<div>
  <div>
    <h3>原型模式</h3>
    <button @click="this.getDemo1">创建people1</button>
    <ul>
      <li>{{demo1.country}}</li>
      <li>{{demo1.minzu}}</li>
      <li>{{demo1.gender}}</li>
      <li>{{demo1.name}}</li>
    </ul>
    <button @click="this.changeDemo1">改变people1</button>
  </div>
</div>
</template>
<script>
import People from '../../../../utils/prototype'
export default {
  data() {
    return {
      demo1: {},
      demo2: {}
    }
  },
  created() {
  },
  methods: {
    getDemo1() {
      console.log(People)
      this.demo1 = new People.people1()
      console.log(this.demo1)

      // var clone1 = this.demo1.clone();
      // console.log(clone1 === this.demo1)
    },
    changeDemo1() {
      this.demo1.setFeature('name', "Iris")
    }
  }
}
</script>
