const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }, 
  methods: {
    reverseSeenStatus() {
      this.seen ? this.seen = false : this.seen = true
    } 
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
