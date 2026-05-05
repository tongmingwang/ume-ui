# Radio

Single selection among multiple options.

## Basic Usage

The simplest radio usage with two-way data binding via `v-model`, wrapped by `u-radio-group`.

<div class="demo-section">
  <u-radio-group v-model="group1">
    <u-radio value="apple">Apple</u-radio>
    <u-radio value="banana">Banana</u-radio>
    <u-radio value="orange">Orange</u-radio>
  </u-radio-group>
  <div class="demo-value">Current selection: {{ group1 }}</div>
</div>

```vue
<template>
  <u-radio-group v-model="group1">
    <u-radio value="apple">Apple</u-radio>
    <u-radio value="banana">Banana</u-radio>
    <u-radio value="orange">Orange</u-radio>
  </u-radio-group>
  <div>Current selection: {{ group1 }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const group1 = ref('apple');
</script>
```

## Disabled

Set disabled state via the `disabled` attribute. Can be set globally on `u-radio-group`.

<div class="demo-section">
  <u-radio-group v-model="group2" disabled>
    <u-radio value="1" color="success">Disabled Option 1</u-radio>
    <u-radio value="2">Disabled Option 2</u-radio>
  </u-radio-group>
</div>

```vue
<template>
  <u-radio-group v-model="group2" disabled>
    <u-radio value="1" color="success">Disabled Option 1</u-radio>
    <u-radio value="2">Disabled Option 2</u-radio>
  </u-radio-group>
</template>

<script setup>
  import { ref } from 'vue';
  const group2 = ref('1');
</script>
```

## Vertical Arrangement

Set vertical arrangement via the `vertical` attribute.

<div class="demo-section">
  <u-radio-group v-model="group3" vertical>
    <u-radio value="1" disabled>Vertical Option 1</u-radio>
    <u-radio value="2">Vertical Option 2</u-radio>
    <u-radio value="3">Vertical Option 3</u-radio>
  </u-radio-group>
</div>

```vue
<template>
  <u-radio-group v-model="group3" vertical>
    <u-radio value="1" disabled>Vertical Option 1</u-radio>
    <u-radio value="2">Vertical Option 2</u-radio>
    <u-radio value="3">Vertical Option 3</u-radio>
  </u-radio-group>
</template>

<script setup>
  import { ref } from 'vue';
  const group3 = ref('1');
</script>
```

## Theme Colors

Set theme color for individual radio buttons via the `color` attribute, supporting `primary`, `success`, `warning`, `error`, `info`.

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

| Attribute | Description      | Type                                             | Default |
| --------- | ---------------- | ------------------------------------------------ | ------- |
| value     | Radio value      | `string \| number \| boolean`                    | -       |
| label     | Radio label      | `string`                                         | -       |
| disabled  | Whether disabled | `boolean`                                        | `false` |
| name      | Name attribute   | `string`                                         | -       |
| color     | Theme color      | `primary \| success \| warning \| error \| info` | -       |

## URadioGroup API

| Attribute  | Description          | Type                                             | Default |
| ---------- | -------------------- | ------------------------------------------------ | ------- |
| modelValue | Binding value        | `string \| number \| boolean`                    | -       |
| disabled   | Whether disabled     | `boolean`                                        | `false` |
| name       | Name attribute       | `string`                                         | -       |
| color      | Theme color          | `primary \| success \| warning \| error \| info` | -       |
| vertical   | Vertical arrangement | `boolean`                                        | `false` |

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
