<template>
  <nav-header></nav-header>
  <div class="row ps-4 pe-4 pt-0  m-0 justify-content-around">
    <card-element title="Some title" description="Some cool description">
    </card-element>
    <card-element title="Some title" description="Some cool description" doubleWidth=1>
    </card-element>
    <card-element > Hi guys
    </card-element>
    <card-element title="Some title" description="Some cool description">
    </card-element>
    <card-element title="Some title" description="Some cool description">
    </card-element>
  </div>
</template>

<script>
import NavHeader from "../components/header.vue";
import CardElement from "../components/card.vue";
export default {
  components: {
    NavHeader,
    CardElement,
  },
};
</script>
<style>
.row {
  background-color: #eeeeee;
}
</style>
