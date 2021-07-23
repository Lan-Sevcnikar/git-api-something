<template>
  <div class="row justify-content-between tbc m-0">
    <div class="col text-start m-3 h5">
      Lan Sevčnikar 
    </div>
    <div class="col d-flex justify-content-end m-3">
      Buttons go here
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    ...mapGetters(["darkMode"]),
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
