<template>
  <div class="main-header">
    <div class="header-icon">
      <i class="logo"></i>
    </div>
    <div class="header-con">
      <div class="menu-item" @click="chooseMenu($event, 'home')">
        <span>个人主页</span>
      </div>
      <div class="menu-item" @click="chooseMenu($event, 'learnings')">
        <span>个人笔记</span>
      </div>
      <div class="menu-item" @click="chooseMenu($event, 'know')">
        <span>知识点</span>
      </div>
      <div class="menu-item">
        <span>个人简介</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
    chooseMenu (e, type) {
      this.$router.push(`/${type}`)
    }
  }
}
</script>
