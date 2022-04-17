const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    number: 100,
    ok: true
  }),
  methods: {
    onClick: function(event) {
      this.ok = !this.ok
    }
  }
})
app.mount('#app')