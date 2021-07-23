<template>
  <div class="">
    <nav-header></nav-header>
    <div class="p-3" style="height: 93%;">
      <div class="sbc h-100">
        <div class="row h-100">
          <div class="col-4 h-100 pe-2 p-3">
            <div class="pbc p-4 h-100 w-100">hi</div>
          </div>
          <div class="col-8 p-3 ps-2">
            <div class="pbc p-4 h-100 w-100" style="text-align: center; display: table;">
              <span class="">
                No API has been called yet
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "../components/header.vue";
// import CardElement from "../components/card.vue";
export default {
  components: {
    NavHeader,
    // CardElement,
  },
};
</script>
<style>
span {
  display: table-cell;
  vertical-align: middle;
  line-height: normal;
  font-size: 1.6em;
  font-style: italic;
  color: #909090;
}
</style>
