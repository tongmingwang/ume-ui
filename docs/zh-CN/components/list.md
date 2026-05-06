# List 列表

用于展示一组数据的列表组件。

## 基础用法

最简单的列表用法，通过 `v-model` 双向绑定选中值。

<div class="demo-section">
  <u-list v-model="value1">
    <u-list-item value="1">Item 1</u-list-item>
    <u-list-item value="2" color="success">Item 2</u-list-item>
    <u-list-item value="3" disabled>Item 3</u-list-item>
  </u-list>
</div>

```vue
<template>
  <u-list v-model="value1">
    <u-list-item value="1">Item 1</u-list-item>
    <u-list-item value="2" color="success">Item 2</u-list-item>
    <u-list-item value="3" disabled>Item 3</u-list-item>
  </u-list>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('1');
</script>
```

## 自定义样式

通过 `radius` 和 `height` 属性自定义列表项的样式。

<div class="demo-section">
  <u-list v-model="value2" color="error">
    <u-list-item
      v-for="item in 5"
      :value="item"
      radius="24px 0 24px 0"
      height="48px">
      {{ item }}
    </u-list-item>
  </u-list>
</div>

```vue
<template>
  <u-list v-model="value2" color="error">
    <u-list-item
      v-for="item in 5"
      :value="item"
      radius="24px 0 24px 0"
      height="48px">
      {{ item }}
    </u-list-item>
  </u-list>
</template>

<script setup>
  import { ref } from 'vue';
  const value2 = ref('1');
</script>
```

## UList API

| 属性       | 说明     | 类型                                             | 默认值 |
| ---------- | -------- | ------------------------------------------------ | ------ |
| modelValue | 绑定值   | `string \| number`                               | -      |
| color      | 主题颜色 | `primary \| success \| warning \| error \| info` | -      |

## UListItem API

| 属性     | 说明       | 类型                                             | 默认值  |
| -------- | ---------- | ------------------------------------------------ | ------- |
| value    | 选项值     | `string \| number`                               | -       |
| disabled | 是否禁用   | `boolean`                                        | `false` |
| color    | 主题颜色   | `primary \| success \| warning \| error \| info` | -       |
| radius   | 圆角半径   | `string`                                         | -       |
| height   | 列表项高度 | `string`                                         | -       |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('1');
  const value2 = ref('1');
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
</style>
