<template>
  <a-extract-style>
    <div class="layout">
      <slot name="header">
        <Header />
      </slot>
      <div class="main-content">
        <slot />
      </div>
      <slot name="footer">
        <Footer />
      </slot>
    </div>
  </a-extract-style>
</template>

<script setup>
  import Header from './Header/Header.vue';
  import Footer from './Footer/Footer.vue';

  // const { finalizePendingLocaleChange } = useI18n();
  // const isReady = ref(false);
  // onBeforeMount(async () => {
  //   // 等待 i18n 加載完成
  //   await finalizePendingLocaleChange();
  //   isReady.value = true;
  // });
</script>

<style lang="scss" scoped>
  .layout {
    height: 100vh;
    .main-content {
      min-height: calc(100vh - $footer-height - $header-height);
    }
  }
</style>
