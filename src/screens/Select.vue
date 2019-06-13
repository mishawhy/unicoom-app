<template>
  <div class="module position-fixed">
    <div class="module__item"><Header /></div>
    <div class="module__item_2"><Feed /></div>
  </div>
</template>

<script>
import Feed from '@/components/Feed';
import Header from '@/components/Header';

export default {
  components: {
    Feed,
    Header,
  },
  created() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
};
</script>

<style lang="scss">
.module {
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
}

.module__item {
  align-items: center;
  display: flex;
  height: 10%;
  justify-content: center;
}
.module__item_2 {
  align-items: top;
  display: flex;
  height: 90%;
  justify-content: left;
}
</style>
