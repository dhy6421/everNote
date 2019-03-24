<template>
<div>
  <div>
    <h3>单例模式</h3>
    <h4 @click="this.getSingle">创建单例</h4>
    <h4 @click="this.getSingleAgain">再次创建单例</h4>
    <div>
      <label>单例内容</label>
      <ul>
        <li>{{demo.name}}</li>
        <li>{{demo.age}}</li>
      </ul>
      <ul>
        <li>{{demo2.name}}</li>
        <li>{{demo2.age}}</li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import Singleton from '../../../../utils/singleLeton'
export default {
  data() {
    return {
      demo: {},
      demo2: {}
    }
  },
  created() {
  },
  methods: {
    getSingle() {
      this.demo = new Singleton('hyain', 18)
    },
    getSingleAgain() {
      this.demo2 = new Singleton('again', 22)
      console.log(this.demo)
      console.log(this.demo2)
    }
  }
}
</script>
