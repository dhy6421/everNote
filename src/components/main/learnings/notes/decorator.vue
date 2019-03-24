<template>
  <div>
    <div>
      <h3>装饰器模式</h3>
      <h5>
        意图：动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。</br>
        主要解决：一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。</br>
        何时使用：在不想增加很多子类的情况下扩展类。</br>
      </h5>
      <div>
        <button @click="creat">创建baseMan</button>
        <span>能力---{{baseMan}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Man from '../../../../utils/Decorator'
export default {
  data() {
    return {
      baseMan: ''
    }
  },
  created() {
  },
  methods: {
    creat() {
      const character = {
        def: 2,
        atk: 3,
        hp: 4
      }
      this.baseMan = new Man(character).toString()
    }
  }
}
</script>
