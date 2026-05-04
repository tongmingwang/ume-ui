# Checkbox

Checkboxes are used for multiple selections in a set of options, supporting basic checked, disabled, and indeterminate states.

<style scoped>
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
.checkbox-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

## Basic Usage

The simplest form of checkbox, using `v-model` for two-way binding.

<div class="checkbox-group">
  <u-checkbox v-model="checked1">Basic Checkbox</u-checkbox>
  <u-checkbox v-model="checked2">Checked</u-checkbox>
</div>

```vue
<template>
  <div class="checkbox-group">
    <u-checkbox v-model="checked1">Basic Checkbox</u-checkbox>
    <u-checkbox v-model="checked2">Checked</u-checkbox>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked1 = ref(false);
  const checked2 = ref(true);
</script>
```

## Different Colors

Checkboxes support multiple theme colors: primary, success, warning, error, info.

<div class="checkbox-group">
  <u-checkbox v-model="colorChecked1" color="primary">Primary</u-checkbox>
  <u-checkbox v-model="colorChecked2" color="success">Success</u-checkbox>
  <u-checkbox v-model="colorChecked3" color="warning">Warning</u-checkbox>
  <u-checkbox v-model="colorChecked4" color="error">Error</u-checkbox>
  <u-checkbox v-model="colorChecked5" color="info">Info</u-checkbox>
</div>

```vue
<template>
  <div class="checkbox-group">
    <u-checkbox v-model="checked1" color="primary">Primary</u-checkbox>
    <u-checkbox v-model="checked2" color="success">Success</u-checkbox>
    <u-checkbox v-model="checked3" color="warning">Warning</u-checkbox>
    <u-checkbox v-model="checked4" color="error">Error</u-checkbox>
    <u-checkbox v-model="checked5" color="info">Info</u-checkbox>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked1 = ref(true);
  const checked2 = ref(true);
  const checked3 = ref(true);
  const checked4 = ref(true);
  const checked5 = ref(true);
</script>
```

## Disabled State

Disable the checkbox using the [disabled](file:///d:\github\ume-ui\packages\ume-ui\checkbox\src\types.ts#L3-L3) property.

<div class="checkbox-group">
  <u-checkbox disabled>Unchecked Disabled</u-checkbox>
  <u-checkbox v-model="disabledChecked" disabled>Checked Disabled</u-checkbox>
</div>

```vue
<template>
  <div class="checkbox-group">
    <u-checkbox disabled>Unchecked Disabled</u-checkbox>
    <u-checkbox v-model="checked" disabled>Checked Disabled</u-checkbox>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked = ref(true);
</script>
```

## Indeterminate State

Set the indeterminate state using the [indeterminate](file:///d:\github\ume-ui\packages\ume-ui\checkbox\src\types.ts#L5-L5) property, typically used to implement "select all" functionality.

<div class="checkbox-block">
  <u-checkbox v-model="checkAll" :indeterminate="isIndeterminate">Select All</u-checkbox>
  <div class="checkbox-group">
    <u-checkbox v-model="checkedList[0]">Option 1</u-checkbox>
    <u-checkbox v-model="checkedList[1]">Option 2</u-checkbox>
    <u-checkbox v-model="checkedList[2]">Option 3</u-checkbox>
  </div>
</div>

```vue
<template>
  <div class="checkbox-block">
    <u-checkbox v-model="checkAll" :indeterminate="isIndeterminate">
      Select All
    </u-checkbox>
    <div class="checkbox-group">
      <u-checkbox v-model="checkedList[0]">Option 1</u-checkbox>
      <u-checkbox v-model="checkedList[1]">Option 2</u-checkbox>
      <u-checkbox v-model="checkedList[2]">Option 3</u-checkbox>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const checkedList = ref([true, false, false]);

  const isIndeterminate = computed(() => {
    const checkedCount = checkedList.value.filter(Boolean).length;
    return checkedCount > 0 && checkedCount < checkedList.value.length;
  });

  const checkAll = computed({
    get: () => checkedList.value.every(Boolean),
    set: (val) => {
      checkedList.value = [val, val, val];
    },
  });
</script>
```

## No Label

You can omit the default slot and display only the checkbox icon.

<div class="checkbox-group">
  <u-checkbox v-model="noLabel1"></u-checkbox>
  <u-checkbox v-model="noLabel2" color="primary"></u-checkbox>
  <u-checkbox v-model="noLabel3" color="success"></u-checkbox>
  <u-checkbox disabled></u-checkbox>
</div>

```vue
<template>
  <div class="checkbox-group">
    <u-checkbox v-model="checked1"></u-checkbox>
    <u-checkbox v-model="checked2" color="primary"></u-checkbox>
    <u-checkbox v-model="checked3" color="success"></u-checkbox>
    <u-checkbox disabled></u-checkbox>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked1 = ref(false);
  const checked2 = ref(true);
  const checked3 = ref(true);
</script>
```

## API

### Checkbox Properties

| Property      | Description                 | Type      | Accepted Values                              | Default |
| ------------- | --------------------------- | --------- | -------------------------------------------- | ------- |
| modelValue    | Binding value, use v-model  | `boolean` | -                                            | `false` |
| disabled      | Whether disabled            | `boolean` | -                                            | `false` |
| checked       | Whether checked             | `boolean` | -                                            | -       |
| indeterminate | Whether indeterminate state | `boolean` | -                                            | -       |
| label         | Label text                  | `string`  | -                                            | -       |
| name          | Native name attribute       | `string`  | -                                            | -       |
| color         | Theme color                 | `string`  | `primary` `success` `warning` `error` `info` | -       |

### Checkbox Events

| Event Name        | Description                          | Callback Parameters |
| ----------------- | ------------------------------------ | ------------------- |
| change            | Triggered when binding value changes | `(value: boolean)`  |
| update:modelValue | Update modelValue                    | `(value: boolean)`  |

<script setup>
import { ref, computed } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)

const colorChecked1 = ref(true)
const colorChecked2 = ref(true)
const colorChecked3 = ref(true)
const colorChecked4 = ref(true)
const colorChecked5 = ref(true)

const disabledChecked = ref(true)

const checkedList = ref([true, false, false])

const isIndeterminate = computed(() => {
  const checkedCount = checkedList.value.filter(Boolean).length
  return checkedCount > 0 && checkedCount < checkedList.value.length
})

const checkAll = computed({
  get: () => checkedList.value.every(Boolean),
  set: (val) => {
    checkedList.value = [val, val, val]
  }
})

const noLabel1 = ref(false)
const noLabel2 = ref(true)
const noLabel3 = ref(true)
</script>
