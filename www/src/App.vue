<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav class="navbar navbar-light top-header">
      <div>
        <img height="100" src="./assets/nyancatballoon.gif">
        <router-link :to="{ name: 'Home'}" class="navbar-brand">
            <a>Hom</a>
        </router-link>
      </div>
      <div>
      <h1>KanzBanz</h1>
      </div>
      <button @click="startDemo">Demo</button>
      <a class="navbar-brand" @click="login" v-if="!(user._id)">Zign In/Loginz</a>
      <div v-if="user._id" class="d-flex flex-column">
          <img height="50
          " src="./assets/Pikanyan.gif">
        <a class="navbar-brand">Uzer: {{user.displayName}}</a>
        <a class="navbar-brand" @click="signOut">Zign out</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      user() {
        return this.$store.state.user
      }
    },

    methods: {
      login() {
        this.$router.push({ name: 'User' })
      },
      signOut() {
        this.$store.dispatch('signOut')
      },
      startDemo() {
        this.$store.dispatch('startDemo')
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Chewy', cursive;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    color: #fff1bc;
    /* background-color: #446e5c;
    background-size: cover; */
    padding: 0;
    margin: 0;

    top: 0;
    left: 0;

    max-width: 100%;
    max-height: 100%;
    
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* margin-top: 60px; */
  }
  
</style>