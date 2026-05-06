# Radio 单选框

在一组备选项中进行单选。

## 基础用法

最简单的单选框用法，通过 `v-model` 双向绑定数据，使用 `u-radio-group` 包裹。

<div class="demo-section">
  <u-radio-group v-model="group1">
    <u-radio value="apple">苹果</u-radio>
    <u-radio value="banana">香蕉</u-radio>
    <u-radio value="orange">橙子</u-radio>
  </u-radio-group>
  <div class="demo-value">当前选择: {{ group1 }}</div>
</div>

```vue
<template>
  <u-radio-group v-model="group1">
    <u-radio value="apple">苹果</u-radio>
    <u-radio value="banana">香蕉</u-radio>
    <u-radio value="orange">橙子</u-radio>
  </u-radio-group>
  <div>当前选择: {{ group1 }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const group1 = ref('apple');
</script>
```

## 禁用状态

通过 `disabled` 属性设置禁用状态。可以给 `u-radio-group` 全局设置。

<div class="demo-section">
  <u-radio-group v-model="group2" disabled>
    <u-radio value="1" color="success">禁用选项一</u-radio>
    <u-radio value="2">禁用选项二</u-radio>
  </u-radio-group>
</div>

```vue
<template>
  <u-radio-group v-model="group2" disabled>
    <u-radio value="1" color="success">禁用选项一</u-radio>
    <u-radio value="2">禁用选项二</u-radio>
  </u-radio-group>
</template>

<script setup>
  import { ref } from 'vue';
  const group2 = ref('1');
</script>
```

## 垂直排列

通过 `vertical` 属性设置垂直排列。

<div class="demo-section">
  <u-radio-group v-model="group3" vertical>
    <u-radio value="1" disabled>垂直选项一</u-radio>
    <u-radio value="2">垂直选项二</u-radio>
    <u-radio value="3">垂直选项三</u-radio>
  </u-radio-group>
</div>

```vue
<template>
  <u-radio-group v-model="group3" vertical>
    <u-radio value="1" disabled>垂直选项一</u-radio>
    <u-radio value="2">垂直选项二</u-radio>
    <u-radio value="3">垂直选项三</u-radio>
  </u-radio-group>
</template>

<script setup>
  import { ref } from 'vue';
  const group3 = ref('1');
</script>
```

## 主题颜色

通过 `color` 属性给单个单选框设置主题颜色，支持 `primary`、`success`、`warning`、`error`、`info`。

<div class="demo-section">
  <u-radio-group v-model="group4">
    <u-radio value="1" color="primary">Primary</u-radio>
    <u-radio value="2" color="success">Success</u-radio>
    <u-radio value="3" color="warning">Warning</u-radio>
    <u-radio value="4" color="error">Error</u-radio>
    <u-radio value="5" color="info">Info</u-radio>
  </u-radio-group>
</div>

```vue
<template>
  <u-radio-group v-model="group4">
    <u-radio value="1" color="primary">Primary</u-radio>
    <u-radio value="2" color="success">Success</u-radio>
    <u-radio value="3" color="warning">Warning</u-radio>
    <u-radio value="4" color="error">Error</u-radio>
    <u-radio value="5" color="info">Info</u-radio>
  </u-radio-group>
</template>

<script setup>
  import { ref } from 'vue';
  const group4 = ref('1');
</script>
```

## URadio API

| 属性       | 说明       | 类型                                             | 默认值  |
| ---------- | ---------- | ------------------------------------------------ | ------- |
| value      | 单选框的值 | `string \| number \| boolean`                    | -       |
| label      | 单选框标签 | `string`                                         | -       |
| disabled   | 是否禁用   | `boolean`                                        | `false` |
| name       | name 属性  | `string`                                         | -       |
| color      | 主题颜色   | `primary \| success \| warning \| error \| info` | -       |

## URadioGroup API

| 属性       | 说明      | 类型                                             | 默认值  |
| ---------- | --------- | ------------------------------------------------ | ------- |
| modelValue | 绑定值    | `string \| number \| boolean`                    | -       |
| disabled   | 是否禁用  | `boolean`                                        | `false` |
| name       | name 属性 | `string`                                         | -       |
| color      | 主题颜色  | `primary \| success \| warning \| error \| info` | -       |
| vertical   | 垂直排列  | `boolean`                                        | `false` |

<script setup>
  import { ref } from 'vue';
  const group1 = ref('apple');
  const group2 = ref('1');
  const group3 = ref('1');
  const group4 = ref('1');
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
  .demo-value {
    margin-top: 8px;
    font-size: 14px;
    color: #666;
  }
</style>
