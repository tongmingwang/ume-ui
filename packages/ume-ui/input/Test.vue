<template>
  <div>
    <h1>UInput 输入框</h1>

    <section>
      <h2>基础用法</h2>
      <div class="row">
        <u-input v-model="value1" placeholder="请输入内容"></u-input>
      </div>
      <p>当前值: {{ value1 || '(空)' }}</p>
    </section>

    <section>
      <h2>不同尺寸</h2>
      <div class="row">
        <u-input v-model="value2" placeholder="Small" size="small"></u-input>
        <u-input v-model="value3" placeholder="Medium" size="medium"></u-input>
        <u-input v-model="value4" placeholder="Large" size="large"></u-input>
      </div>
    </section>

    <section>
      <h2>禁用状态</h2>
      <div class="row">
        <u-input v-model="value5" placeholder="禁用输入" disabled></u-input>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('已禁用内容');
</script>

<style scoped>
  .demo {
    padding: 20px;
  }
  .demo section {
    margin-bottom: 32px;
  }
  .row {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    align-items: center;
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #666;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
    color: #888;
  }
</style>
