<template>
  <div
    style="cursor: pointer;"
    class="text-start mt-0 mb-4 p-2 ps-3"
    :class="{ sbc : hover, isBeingHoverOver: hover }"
    @click="callApi"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="h3">
      {{ api_name }}
    </div>
    <div class="h6">
      {{ api_description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    api_name: {
      type: String,
      default: "",
    },
    api_description: {
      type: String,
      default: "",
    },
  },
  data(){
    return{
      hover: false,
    }
  },
  methods: {
    callApi() {
      console.log("hiii");
    },
  },
};
</script>

<style>

.isBeingHoverOver{
   transition: .5s;
}

</style>
