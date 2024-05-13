<script setup lang="ts">
  import logo from '../images/NagarroLogo-FinalSlide.png';

  const style = { backgroundImage: `url(${logo})` };
</script>

<template>
  <div class="slidev-layout thank-you" :style="style">
    <div>
      <slot />
    </div>
  </div>
</template>
