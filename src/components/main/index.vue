<template>
  <div class="main-main">
    <header-nav></header-nav>
    <div class="main-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import headerNav from '@/components/plugins/header_nav'
export default {
  components: {
    headerNav
  },
  data () {
    return {

    }
  }
}
</script>
