<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import logoBg from '../images/NagarroLogoSlideBg.png';
import logo from '../images/NagarroLogo.svg';

const props = defineProps({
  background: {
    default: logoBg,
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div
    class="slidev-layout cover"
    :style="style"
  >
    <img :src="logo" class="logo" alt="">
    <slot />
  </div>
</template>
