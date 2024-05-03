
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
  // @apply
  //   border-none
  //   bg-teal-500
  //   text-white
  //   font-bold
  //   px-4
  //   py-2
  //   rounded
  //   cursor-pointer

  //   transform
  //   duration-100
  //   ease-in-out

  //   hover:(bg-teal-600)
  //   active:(scale-90);
}
</style>