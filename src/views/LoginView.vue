<template>
  <div class="row p-4 m-0 justify-content-center h-100  align-items-center">
    <div class="card col-12 col-sm-8 col-lg-4 p-3 pt-4 p-sm-5 m-3">
      <form class="text-start" @submit="checkForm">
        <div>
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email address</label>
            <input v-model="email" type="email" class="form-control" />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" />
          </div>
        </div>
        <br />
        <div class="w-100 justify-content-center">
          <button type="submit" class="btn btn-primary w-100">Sign In</button>
        </div>
      </form>
      <p class="text-end mt-2 mb-4">
        <router-link to="/forgot-password"> <i> Forgot password ?</i></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    checkForm: async function (e){
      e.preventDefault();
      const email = this.email;
      const password = this.password;
      localStorage.setItem("userData", JSON.stringify({
        email: email,
        password: password,
      }))
      //console.log('e')
      this.$router.push('home');
    }
  }
};
</script>