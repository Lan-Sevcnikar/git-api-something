<template>
  <div class="card">
    <div class="row justify-content-center pt-4 pb-4 bg-white">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <div class="row">
          <div class="col-12 col-sm-9 m-auto text-start">
            You are logged in as <i>{{ usersemail }}</i>
          </div>
          <div class="col-12 col-sm-3">
            <button class="btn btn-primary" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    usersemail() {
      return JSON.parse(localStorage.getItem("userData")).email;
    },
  },
  methods: {
    logout: function () {
      localStorage.setItem("userData", "{}");
      this.$router.go();
    },
  },
};
</script>

<style>
.lightgray {
  background-color: #eeeeee;
}
</style>