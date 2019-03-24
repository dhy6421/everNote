<template>
  <div class="notes-main">
    <div class="directory">
      <div class="dir-title">
        <span @click="chooseCon('day')">每日笔记</span>
        <span @click="chooseCon('base')">基础笔记</span>
      </div>
      <div class="dir-con" v-show="activeName === 'day'">
        <ul class="con-day">
          <li @click="chooseNote('11_1')">工厂模式</li>
          <li @click="chooseNote('11_2')">建造者模式</li>
          <li @click="chooseNote('11_3')">单例模式</li>
          <li @click="chooseNote('11_4')">原型模式</li>
          <li @click="chooseNote('adapter')">适配器模式</li>
          <li @click="chooseNote('bridge')">桥接模式</li>
          <li @click="chooseNote('composite')">组合模式</li>
          <li @click="chooseNote('decorator')">装饰器模式</li>
          <li @click="chooseNote('facade')">外观模式</li>
          <li @click="chooseNote('flyweight')">享元模式</li>
        </ul>
      </div>
      <div class="dir-con" v-show="activeName === 'base'">
      </div>
    </div>
    <div class="content">
      <factory v-show="notesDate === '11_1'"/>
      <builder v-show="notesDate === '11_2'"/>
      <single v-show="notesDate === '11_3'"/>
      <prototype v-show="notesDate === '11_4'"/>
      <adapter v-show="notesDate === 'adapter'"/>
      <bridge v-show="notesDate === 'bridge'"/>
      <composite v-show="notesDate === 'composite'"/>
      <decorator v-show="notesDate === 'decorator'"/>
      <facade v-show="notesDate === 'facade'"/>
      <flyweight v-show="notesDate === 'flyweight'"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notesDate: '',
      activeName: 'day'
    };
  },
  created() {
    this.init()
  },
  methods: {
    init () {
     
    },
    chooseNote (date) {
      this.notesDate = date
      console.log(this.notesDate)
    },
    chooseCon (con) {
      this.activeName = con
    },
    render (h) {
      return h ('ul',{
        'class': 'ul'
      })
    }
  }
}
</script>