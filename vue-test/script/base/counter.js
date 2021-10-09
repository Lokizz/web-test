// ! vue 中数据和 DOM 之间的关联都是响应式的
const Counter = {
  data() {
    return {
      counter: 0
    }
  }, 
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

// * 绑定对应地元素
Vue.createApp(Counter).mount('#counter')