<template>
  <div>
    <TodoHeader/>
    <TodoInput/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
  import TodoHeader from '@/components/todo/TodoHeader'
  import TodoInput from "@/components/todo/TodoInput";
  import TodoList from "@/components/todo/TodoList";
  import TodoFooter from "@/components/todo/TodoFooter";

  export default {
    name: 'App',
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    },
    created() {
      this.$store.dispatch('getAllTodo')
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #f5f5f5;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
