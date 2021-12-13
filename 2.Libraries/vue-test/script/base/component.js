const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' }, 
        { id: 1, text: 'Cheese'},
        { id: 2, text: 'Meat'}
      ],
    }
  }
}

// 创建 Vue 应用
const app = Vue.createApp(TodoList)

// 定义 todo-item 的新组件
app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

// 挂载 Vue 应用
app.mount('#todo-list-app')