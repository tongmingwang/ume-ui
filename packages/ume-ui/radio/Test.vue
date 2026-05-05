<template>
  <div class="test-radio">
    <h2>URadioGroup 基础用法</h2>
    <div class="section">
      <u-radio-group v-model="group1">
        <u-radio value="apple">苹果</u-radio>
        <u-radio value="banana">香蕉</u-radio>
        <u-radio value="orange">橙子</u-radio>
      </u-radio-group>
      <div>当前选择: {{ group1 }}</div>
    </div>

    <h2>禁用状态</h2>
    <div class="section">
      <u-radio-group v-model="group2" disabled>
        <u-radio value="1" color="success">禁用选项一</u-radio>
        <u-radio value="2">禁用选项二</u-radio>
      </u-radio-group>
    </div>

    <h2>垂直排列</h2>
    <div class="section">
      <u-radio-group v-model="group3" vertical>
        <u-radio value="1" disabled>垂直选项一</u-radio>
        <u-radio value="2">垂直选项二</u-radio>
        <u-radio value="3">垂直选项三</u-radio>
      </u-radio-group>
    </div>

    <h2>不同颜色</h2>
    <div class="section">
      <u-radio-group v-model="group4">
        <u-radio value="1" color="primary">Primary</u-radio>
        <u-radio value="2" color="success">Success</u-radio>
        <u-radio value="3" color="warning">Warning</u-radio>
        <u-radio value="4" color="error">Error</u-radio>
        <u-radio value="5" color="info">Info</u-radio>
      </u-radio-group>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const group1 = ref('apple');
  const group4 = ref('1');
</script>

<style scoped>
  .test-radio {
    padding: 20px;
  }
  .section {
    margin: 20px 0;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }
</style>
