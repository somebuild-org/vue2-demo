
<script>
export default {
  data(){
    return {
      a: 123
    }
  }
}
</script>

<template>
  <button class="vaguer-button">
    <slot />-{{ a }}
  </button>
</template>

<style lang="scss">
.vaguer-button {
  color: red;
}
</style>