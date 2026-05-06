<template>
  <div>
    <h1>USelect</h1>
    全部自定义
    <USelect>
      <span>List Item {{ value }}</span>
      <template #content>
        <UList v-model="value">
          <UListItem :value="i" v-for="i in 50">List Item {{ i }}</UListItem>
        </UList>
      </template>
    </USelect>
    <br />
    <h2>设置色彩</h2>
    <USelect>
      <span>List Item {{ value }}</span>
      <template #content>
        <UList v-model="value" color="success">
          <UListItem :value="i" v-for="i in 50">List Item {{ i }}</UListItem>
        </UList>
      </template>
    </USelect>

    <h2>radius</h2>
    <USelect>
      <span>List Item {{ value }}</span>
      <template #content>
        <UList v-model="value">
          <UListItem radius="8px 0 8px 0" :value="i" v-for="i in 50">
            List Item {{ i }}
          </UListItem>
        </UList>
      </template>
    </USelect>

    <h2>Height</h2>
    <USelect>
      <span>List Item {{ value }}</span>
      <template #content>
        <UList v-model="value">
          <UListItem height="60px" :value="i" v-for="i in 50">
            List Item {{ i }}
          </UListItem>
        </UList>
      </template>
    </USelect>

    <h2>disabled</h2>
    <USelect disabled>
      <span>List Item {{ value }}</span>
      <template #content>
        <UList v-model="value">
          <UListItem height="60px" :value="i" v-for="i in 50">
            List Item {{ i }}
          </UListItem>
        </UList>
      </template>
    </USelect>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref('1');
</script>

<style scoped></style>
