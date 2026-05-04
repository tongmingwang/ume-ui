<template>
  <div style="padding: 20px">
    <h1>Checkbox Test</h1>

    <h2>基础单选</h2>
    <div style="margin-bottom: 20px">
      <u-checkbox v-model="checked1">选项A</u-checkbox>
      <u-checkbox v-model="checked2" color="primary">选项B</u-checkbox>
      <u-checkbox v-model="checked3" color="success">选项C</u-checkbox>
    </div>
    <p>选中状态: A: {{ checked1 }}, B: {{ checked2 }}, C: {{ checked3 }}</p>

    <h2>禁用状态</h2>
    <div style="margin-bottom: 20px">
      <u-checkbox disabled>未选中禁用</u-checkbox>
      <u-checkbox v-model="checked4" disabled>已选中禁用</u-checkbox>
    </div>

    <h2>全选功能</h2>
    <div style="margin-bottom: 20px">
      <u-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        color="primary">
        全选
      </u-checkbox>
      <div style="margin-left: 20px; margin-top: 10px">
        <u-checkbox v-model="checkList[0]" color="primary">选项 1</u-checkbox>
        <u-checkbox v-model="checkList[1]" color="primary">选项 2</u-checkbox>
        <u-checkbox v-model="checkList[2]" color="primary">选项 3</u-checkbox>
      </div>
    </div>
    <p>选中项: {{ checkList }}</p>
    <p>isIndeterminate: {{ isIndeterminate }}, checkAll: {{ checkAll }}</p>

    <h2>不同颜色</h2>
    <div style="margin-bottom: 20px">
      <u-checkbox v-model="checked5" color="primary">Primary</u-checkbox>
      <u-checkbox v-model="checked6" color="success">Success</u-checkbox>
      <u-checkbox v-model="checked7" color="warning">Warning</u-checkbox>
      <u-checkbox v-model="checked8" color="error">Error</u-checkbox>
      <u-checkbox v-model="checked9" color="info">Info</u-checkbox>
    </div>

    <h2>无标签</h2>
    <div style="margin-bottom: 20px">
      <u-checkbox v-model="checked10"></u-checkbox>
      <u-checkbox v-model="checked11" color="primary"></u-checkbox>
      <u-checkbox v-model="checked12" color="success"></u-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  const checked1 = ref(false);
  const checked2 = ref(true);
  const checked3 = ref(false);
  const checked4 = ref(true);
  const checked5 = ref(true);
  const checked6 = ref(true);
  const checked7 = ref(true);
  const checked8 = ref(true);
  const checked9 = ref(true);
  const checked10 = ref(false);
  const checked11 = ref(true);
  const checked12 = ref(true);

  const checkList = ref([true, false, false]);

  const isIndeterminate = computed(() => {
    const checkedCount = checkList.value.filter(Boolean).length;
    return checkedCount > 0 && checkedCount < checkList.value.length;
  });

  const checkAll = computed({
    get: () => checkList.value.every(Boolean),
    set: (val: boolean) => {
      checkList.value = [val, val, val];
    },
  });
</script>
