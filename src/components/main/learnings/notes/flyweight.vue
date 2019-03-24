<template>
  <div>
    <div>
      <h3>享元模式</h3>
      <h5>
        意图：运用共享技术有效地支持大量细粒度的对象。</br>
        主要解决：在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来，如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。</br>
        何时使用： 1、系统中有大量对象。 2、这些对象消耗大量内存。 3、这些对象的状态大部分可以外部化。</br>
        4、这些对象可以按照内蕴状态分为很多组，当把外蕴对象从对象中剔除出来时，每一组对象都可以用一个对象来代替。 5、系统不依赖于这些对象身份，这些对象是不可分辨的。</br>
      </h5>
      <div>
        <button>创建baseMan</button>
      </div>
    </div>
  </div>
</template>
<script>
import Man from '../../../../utils/flyweight'
export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    
  }
}
</script>
