<template>
  <NuxtLayout name="default">
    <template #header>
      <Header :class="`active-${activePageIndex}`" />
    </template>
    <div>
      <a-button type="primary" class="mr-2" @click="handlFetchData">获取数据</a-button>
      <a-button type="primary" class="mr-2" @click="handlPostData">提交数据</a-button>
      <a-button type="primary" class="mr-2" @click="handlRumTimeConfigData"
        >rumTimeConfig数据</a-button
      >
    </div>
    <template #footer>
      <Footer />
    </template>
  </NuxtLayout>
</template>
<script lang="ts" setup>
  import Header from '@/layouts/Header/Header.vue';
  import Footer from '@/layouts/Footer/Footer.vue';

  const activePageIndex = ref(0);
  const HomeApi = useHomeApi();
  const res = await HomeApi.getMsgListSSR();
  console.log('getMsgList ->res', res);

  function handlFetchData() {
    HomeApi.getMsgList({ page: 1 });
  }

  function handlPostData() {
    HomeApi.postMsg({
      a: 1,
      b: 2,
    });
  }

  function handlRumTimeConfigData() {
    console.log(useRuntimeConfig().public);
  }
</script>
<style lang="scss" scoped></style>
