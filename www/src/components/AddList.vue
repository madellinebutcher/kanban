<template>
  <div class="add-list">
    <button class="btn btn-primary btn-success my-btn" @click="toggleAdd">Adz Liz</button>
    <div v-if="toggleList">
      <form v-on:submit.prevent="addList">
        <input type="text" v-model="list.title" placeholder="Liz Title" required>
        <input type="text" v-model="list.description" placeholder="Dezcrypton">
        <button class="btn btn-primary btn-success my-btn" type="submit">Zummitz</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddList',
    data() {
      return {
        toggleList: false,
        list: {
          title: '',
          description: ''
        }
      }
    },
    computed: {},
    methods: {
      toggleAdd() {
        this.toggleList = !this.toggleList
      },
      addList() {
        var newList = {
          title: this.list.title,
          description: this.list.description
        }
        this.$store.dispatch('addList', newList)
        this.list.title = ''
        this.list.description = ''
      }
    }
  }

</script>

<style>
  .my-btn {
    border-radius: 15px;
    margin: 2vh
  }
</style>