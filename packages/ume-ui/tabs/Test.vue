<template>
  <UTabs v-model="activeTab" :animated="true" color="error">
    <UTabPane v-for="i in 5" :name="i" :label="'Tab ' + i">
      <u-card :color="`#f${i}0`">
        <u-card-title>标题 {{ i }}</u-card-title>
        <img :src="`https://picsum.photos/200/200?random=${i}`" />
      </u-card>
    </UTabPane>
  </UTabs>

  <UTabs v-model="activeTab" type="card" :animated="false" color="error">
    <UTabPane v-for="i in 5" :name="i" :label="'Tab ' + i">
      <u-card>
        <u-card-title>标题</u-card-title>
        <img :src="`https://picsum.photos/200/200?random=${i * 10}`" />
      </u-card>
    </UTabPane>
  </UTabs>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
