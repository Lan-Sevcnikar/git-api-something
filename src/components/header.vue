<template>
  <div class="row justify-content-between tbc m-0" style="border-radius: .0em;">
    <div class="col text-start m-3 h5">
      Lan Sevčnikar
    </div>
    <div class="col d-flex justify-content-end m-3">
      <span class="dot" v-for="i in new Array(3)" :key="i" :class="'ms-2'"></span>
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

<style>
.dot {
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
}
</style>
