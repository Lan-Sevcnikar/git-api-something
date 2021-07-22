<template>
  <div
    :class="!doubleWidth ? 'col-12 col-xl-4' : 'col-12 col-xl-8'"
    class="p-1 m-0 text-start"
  >
    <div class="card p-4 m-2">
      <div>
        <h3>{{ title }}</h3>
        {{ description }}
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    doubleWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>

</style>
