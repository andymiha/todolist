<script setup>
import { ref, onMounted, computed, watch, triggerRef } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref('')

const todos_asc = computed(() => todos.value.sort((a, b) => b.createdAt - a.createdAt))

const addTodo = () => {
  if(input_content.value.trim() === '' || input_category.value === null) return

  todos.value.push({
    id: todos.value.length + 1,
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
  })

  input_content.value = ''
  input_category.value = null
}

const removeTodo = todo => {
  todos.value = todos.value.filter(t => t !== todo)
}

watch(name, (newName) => {
  localStorage.setItem('name', newName)
}) 

watch(todos, (newTodo) => {
  localStorage.setItem('todos', JSON.stringify(newTodo))
}, { deep: true })

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
  <HelloWorld msg="TohDoh"/>
  <main>
    <section>
      <h2><input v-model="name" type="text" placeholder="Name here" >'s Tasks</h2>
    </section>
    <section>
      <h3>Add Task</h3>
      <form @submit.prevent="addTodo">
        <h4>What's to do?</h4>
        <input v-model="input_content" placeholder="Content" />

        <h4>Category</h4>
        <div>
          <label>
            <div>Business</div>
            <input v-model="input_category" type="radio" name="Category" value="business"/>
          </label>

          <label>
            <div>Personal</div>
            <input v-model="input_category" type="radio" name="Category" value="personal"/>
          </label>
        </div>

        <input type="submit" value="Add tohdoh"/>
      </form>
    </section>

    <section>
      <h3>TohDohs</h3>
      <div v-for="todo in todos_asc">
        <label>
          <input type="checkbox" v-model="todo.done"/>
          <span :style="{textDecoration: todo.done ? 'line-through' : 'none'}">
            <input type="text" v-model="todo.content"/>
          </span>
        </label>

        <div>
          <button @click="removeTodo(todo)">Delete</button>
        </div>
      </div>
    </section>
    
  </main>
</template>