<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import swirl from '../images/NagarroSwirlBottom.png';
import logo from '../images/NagarroLogo-Small.svg';

const defaultStyle = {
  backgroundImage: `url(${swirl})`,
};

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
});

const style = computed(() =>
  handleBackground(props.image, { backgroundSize: props.backgroundSize })
);
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div
      class="slidev-layout default"
      :style="defaultStyle"
      :class="props.class"
    >
      <img :src="logo" class="right-logo" alt="" />
      <slot />
    </div>
    <div class="w-full h-full" :style="style" />
  </div>
</template>
