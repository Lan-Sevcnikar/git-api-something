<template>
  <div class="row justify-content-center ps-4 pe-4 pt-4 m-0 ">
    <div class="col-12 p-1 m-0">
      <div class="card p-2 p-4 m-2">
        <div class="row justify-content-between bg-white">
          <div class="col m-auto text-start ms-3">
              <i> Logged in as </i> <b> {{usersemail}} </b>
          </div>
          <div class="col d-flex justify-content-end me-3">
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
    logout: function() {
      localStorage.setItem("userData", "{}");
      this.$router.go();
    },
  },
};
</script>

<style></style>
