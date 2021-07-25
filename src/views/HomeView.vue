<template>
  <div class="">
    <nav-header></nav-header>
    <div class="p-3" style="height: 93%;">
      <div class="sbc h-100">
        <div class="row h-100">
          <div class="col-4 h-100 pe-2 p-3">
            <div class="pbc p-4 h-100 w-100 scroller">
              <api-option
                v-for="(api, index) in ApiOptions"
                :key="index"
                :api_name="api.api_name"
                :api_description="api.api_description"
              ></api-option>
            </div>
          </div>
          <div class="col-8 p-3 ps-2">
            <div
              class="pbc p-4 h-100 w-100"
              style="text-align: center; display: table;"
            >
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
import ApiOption from "../components/api_options.vue";
// import CardElement from "../components/card.vue";
export default {
  components: {
    NavHeader,
    ApiOption,
    // CardElement,
  },
  data() {
    return {
      ApiOptions: [
        {
          api_name: "Some Api 1",
          api_description: "This is a description of api 1",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 2",
          api_description: "This is a description of api 2",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 3",
          api_description: "This is a description of api 3",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 4",
          api_description: "This is a description of api 4",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 5",
          api_description: "This is a description of api 5",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 6",
          api_description: "This is a description of api 6",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 1",
          api_description: "This is a description of api 1",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 2",
          api_description: "This is a description of api 2",
          api_endpoint: "/....",
        },
        {
          api_name: "Some Api 3",
          api_description: "This is a description of api 3",
          api_endpoint: "/....",
        },
      ],
    };
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

.scroller {
  margin: 4px, 4px;
  padding: 4px;
  background-color: green;
  width: 500px;
  height: 110px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
}
</style>
