<script setup lang="ts">
import swirl from '../images/NagarroSwirlBottom.png';
import logo from '../images/NagarroLogo-Small.svg';

const style = {
  backgroundImage: `url(${swirl})`
}
</script>

<template>
  <div
    class="slidev-layout default flex flex-col"
    :style="style"
  >
    <img :src="logo" class="right-logo" alt="">
    <slot />
  </div>
</template>
