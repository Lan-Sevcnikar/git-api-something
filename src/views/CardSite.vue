<template>
  <div class="row p-4 m-0 justify-content-center">
    <div class="card col-12 col-sm-8 col-lg-4 p-3 pt-4 p-sm-5 m-3">
      <h3>{{header}}</h3>
      {{body}}
      <br/> <br>
      <router-link to="/home" class="btn btn-primary">Go home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    header() {
      if(this.$route.path == '/forgot-password'){
        return "Jure?"
      }
      return "404"
    },
    body(){
      if(this.$route.path == '/forgot-password'){
        return "I don't know what to do"
      }
      return "Does not seem to exist"
    }
  }
};
</script>