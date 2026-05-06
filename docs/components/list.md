# List

A list component for displaying a set of data.

## Basic Usage

The simplest list usage with two-way data binding via `v-model`.

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

## Custom Style

Customize list item styles via `radius` and `height` attributes.

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

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| modelValue | Binding value | `string \| number` | - |
| color | Theme color | `primary \| success \| warning \| error \| info` | - |

## UListItem API

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| value | Option value | `string \| number` | - |
| disabled | Whether disabled | `boolean` | `false` |
| color | Theme color | `primary \| success \| warning \| error \| info` | - |
| radius | Border radius | `string` | - |
| height | Item height | `string` | - |

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
