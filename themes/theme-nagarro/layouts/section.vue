<script setup lang="ts">
  import { computed } from 'vue';
  import { handleBackground } from '../layoutHelper';
  import logoBg from '../images/NagarroLogoSlideBg-Light.png';
  import logo from '../images/NagarroLogo-Dark.svg';

  const props = defineProps({
    background: {
      default: logoBg,
    },
  })

  const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout section" :style="style">
    <img :src="logo" class="logo" alt="">
    <slot />
  </div>
</template>
