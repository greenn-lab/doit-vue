<template>
  <section>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="item.text" class="shadow">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>

        <a @click="toggle(index)">{{ item }}</a>

        <span @click="remove(item, index)" class="remove-btn">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd"
                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
          </svg>
        </span>

      </li>
    </ul>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        items: 'allTodo'
      })
    },
    methods: {
      toggle(index) {
        this.$store.commit('toggleTodo', index)
      },
      remove(item, index) {
        this.$store.commit('removeTodo', index)
      }
    }
  }
</script>
