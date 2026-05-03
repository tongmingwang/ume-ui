<template>
  <div>
    <Btn color="primary" variant="contained">
      Button
      <Btn size="small" color="warning" shape="circle" @click.stop="">+</Btn>
    </Btn>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { UButton } from '../output/dist/button/index.js';
  import '../output/dist/button/index.css';
  defineOptions({
    components: {
      Btn: UButton,
    },
  });
</script>
