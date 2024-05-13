<script setup lang="ts">
import swirl from '../images/NagarroSwirlBottom.png';
import logo from '../images/NagarroLogo-Small.svg';

const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})

const style = {
  backgroundImage: `url(${swirl})`
}
</script>

<template>
  <div
    class="slidev-layout two-columns w-full h-full grid grid-cols-2 gap-8" :class="props.layoutClass"
    :style="style"
  >
    <div class="col-left" :class="props.class">
      <slot />
    </div>
    <div class="col-right" :class="props.class">
      <img :src="logo" class="right-logo" alt="">
      <slot name="right" />
    </div>
  </div>
</template>
