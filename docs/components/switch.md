# Switch

A switch component for toggling between two states.

<style scoped>
.switch-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
</style>

## Basic Usage

The simplest form of switch, using `v-model` for two-way binding.

<div class="switch-group">
  <u-switch v-model="checked1"></u-switch>
  <u-switch v-model="checked2"></u-switch>
</div>

```vue
<template>
  <div class="switch-group">
    <u-switch v-model="checked1"></u-switch>
    <u-switch v-model="checked2"></u-switch>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked1 = ref(false);
  const checked2 = ref(true);
</script>
```

## Different Colors

Switch supports multiple theme colors: primary, success, warning, error.

<div class="switch-group">
  <u-switch v-model="colorChecked1" color="primary"></u-switch>
  <u-switch v-model="colorChecked2" color="success"></u-switch>
  <u-switch v-model="colorChecked3" color="warning"></u-switch>
  <u-switch v-model="colorChecked4" color="error"></u-switch>
</div>

```vue
<template>
  <div class="switch-group">
    <u-switch v-model="checked1" color="primary"></u-switch>
    <u-switch v-model="checked2" color="success"></u-switch>
    <u-switch v-model="checked3" color="warning"></u-switch>
    <u-switch v-model="checked4" color="error"></u-switch>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked1 = ref(true);
  const checked2 = ref(true);
  const checked3 = ref(true);
  const checked4 = ref(true);
</script>
```

## Different Sizes

Switch supports multiple sizes: mini, small, medium, large.

<div class="switch-group">
  <u-switch v-model="sizeChecked" size="mini"></u-switch>
  <u-switch v-model="sizeChecked" size="small"></u-switch>
  <u-switch v-model="sizeChecked" size="medium"></u-switch>
  <u-switch v-model="sizeChecked" size="large"></u-switch>
</div>

```vue
<template>
  <div class="switch-group">
    <u-switch v-model="checked" size="mini"></u-switch>
    <u-switch v-model="checked" size="small"></u-switch>
    <u-switch v-model="checked" size="medium"></u-switch>
    <u-switch v-model="checked" size="large"></u-switch>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked = ref(true);
</script>
```

## Disabled State

Disable the switch using the `disabled` property.

<div class="switch-group">
  <u-switch v-model="disabledChecked1" disabled></u-switch>
  <u-switch v-model="disabledChecked2" disabled></u-switch>
</div>

```vue
<template>
  <div class="switch-group">
    <u-switch v-model="checked1" disabled></u-switch>
    <u-switch v-model="checked2" disabled></u-switch>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checked1 = ref(false);
  const checked2 = ref(true);
</script>
```

## Custom Text

Customize the checked and unchecked text using slots.

<div class="switch-group">
  <u-switch v-model="textChecked">
    <template #checked>ON</template>
    <template #unchecked>OFF</template>
  </u-switch>
</div>

```vue
<template>
  <u-switch v-model="checked">
    <template #checked>ON</template>
    <template #unchecked>OFF</template>
  </u-switch>
</template>

<script setup>
  import { ref } from 'vue';

  const checked = ref(true);
</script>
```

## Custom Icons

Customize the checked and unchecked icons using slots.

<div class="switch-group">
  <u-switch v-model="iconChecked">
    <template #checked-icon>
      <u-icon name="check"></u-icon>
    </template>
    <template #unchecked-icon>
      <u-icon name="close"></u-icon>
    </template>
  </u-switch>
</div>

```vue
<template>
  <u-switch v-model="checked">
    <template #checked-icon>
      <u-icon name="check"></u-icon>
    </template>
    <template #unchecked-icon>
      <u-icon name="close"></u-icon>
    </template>
  </u-switch>
</template>

<script setup>
  import { ref } from 'vue';

  const checked = ref(true);
</script>
```

## API

### Switch Properties

| Property      | Description                 | Type      | Accepted Values                              | Default   |
| ------------- | --------------------------- | --------- | -------------------------------------------- | --------- |
| modelValue    | Binding value, use v-model  | `boolean` | -                                            | `false`   |
| disabled      | Whether disabled            | `boolean` | -                                            | `false`   |
| size          | Size of the switch          | `string`  | `mini` `small` `medium` `large`              | `medium`  |
| color         | Theme color                 | `string`  | `primary` `success` `warning` `error`        | -         |
| checked       | Checked text                | `string`  | -                                            | -         |
| unchecked     | Unchecked text              | `string`  | -                                            | -         |

### Switch Events

| Event Name        | Description                          | Callback Parameters |
| ----------------- | ------------------------------------ | ------------------- |
| change            | Triggered when binding value changes | `(value: boolean)`  |
| update:modelValue | Update modelValue                    | `(value: boolean)`  |

### Switch Slots

| Name           | Description                  |
| -------------- | ---------------------------- |
| checked        | Custom checked text          |
| unchecked      | Custom unchecked text        |
| checked-icon   | Custom checked icon          |
| unchecked-icon | Custom unchecked icon        |

<script setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)

const colorChecked1 = ref(true)
const colorChecked2 = ref(true)
const colorChecked3 = ref(true)
const colorChecked4 = ref(true)

const sizeChecked = ref(true)

const disabledChecked1 = ref(false)
const disabledChecked2 = ref(true)

const textChecked = ref(true)

const iconChecked = ref(true)
</script>