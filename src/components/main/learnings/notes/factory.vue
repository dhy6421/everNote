<template>
<div>
  <div>
    <h3>工厂模式</h3>
    <button @click="getNikeJacket">生产一个耐克夹克</button>
    <ul>
      <li>衣服加工厂--{{nikeJacket.factory}}</li>
      <li>衣服类型--{{nikeJacket.type}}</li>
      <li>衣服号码--{{nikeJacket.size}}</li>
      <li>衣服颜色--{{nikeJacket.color}}</li>
      <li>衣服价格--{{nikeJacket.price}}</li>
    </ul>
    <button @click="changeNikeJacketSize('nikeJacket')">改变耐克夹克号码</button>
  </div>
</div>
</template>
<script>
import AbstractFactory from '../../../../utils/factory'
export default {
  data() {
    return {
      nikeJacket: {}
    }
  },
  created() {
  },
  methods: {
    getNikeJacket () {
      console.log(AbstractFactory.produce)
      this.nikeJacket = AbstractFactory.produce({
        factory: 'NikeFactory',
        type: 'NikeJacket',
        size: 'L',
        color: 'blue',
        price: 800
      })
      console.log(this.nikeJacket)
      this.nikeJacket.publish()
      this.nikeJacket.doSomething()
      console.log(this.nikeJacket)
    },
    changeNikeJacketSize(clothType) {
      switch(clothType) {
        case 'nikeJacket':
          this.nikeJacket.changeSize('XXL')
          break
        default:
          break
      }
    }
  }
}
</script>
