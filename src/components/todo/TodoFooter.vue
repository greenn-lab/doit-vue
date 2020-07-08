<template>
  <div class="clear-all-container">
    <span @click="clearTodo" class="clear-all-btn">all clear!</span>
  </div>
</template>

<script>
  export default {
    methods: {
      clearTodo() {
        this.$store.commit('clearAll')
      }
    }
  }
</script>

<style>
  .clear-all-btn {
    border-top: 1px solid #ccc;
  }
</style>
