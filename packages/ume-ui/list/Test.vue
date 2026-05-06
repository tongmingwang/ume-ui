<template>
  <div>
    <h1>UList</h1>

    <uList>
      <uListItem value="1">Item 1</uListItem>
      <uListItem value="2" color="success">Item 2</uListItem>
      <uListItem value="3" disabled>Item 3</uListItem>
    </uList>

    <h2>自定义</h2>
    <UList color="error">
      <UListItem
        v-for="item in 5"
        :value="item"
        radius="24px 0  24px 0"
        height="48px">
        {{ item }}
      </UListItem>
    </UList>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
