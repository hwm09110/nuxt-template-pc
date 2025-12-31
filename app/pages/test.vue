<template>
  <div class="test-page">
    <h2>测试页面</h2>
    <div class="row">
      <a-button type="primary" @click="showMsg">点击测试</a-button>
    </div>
    <div class="row">
      <HomeOutlined />
      <SettingFilled />
    </div>
    <div class="row">
      <a-table :data-source="dataSource" :columns="columns" />
    </div>
    <div>sotre: {{ testStore.count }} <a-button @click="hanAddCount">add</a-button></div>
  </div>
</template>
<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { HomeOutlined, SettingFilled } from '@ant-design/icons-vue';
  import { useTestStore } from '@/stores/testStore';

  const { t } = useI18n();
  const testStore = useTestStore();

  function hanAddCount() {
    testStore.addCount();
  }

  definePageMeta({
    // layout: 'test',
    layout: 'default',
  });

  const dataSource = ref([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]);
  const columns = ref([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]);

  function showMsg() {
    message.success(t('menu.home'));
  }

  useHead({
    title: t('menu.home'),
  });
</script>
<style lang="scss" scoped>
  .test-page {
    padding: 10px;
    .row {
      margin-top: 20px;
    }
  }
</style>
