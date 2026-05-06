# Select

A dropdown selector component with customizable content.

**Dependencies:**
- `UList` - List container component
- `UListItem` - List item component

## Basic Usage

The simplest selector usage with custom dropdown content via `content` slot.

<div class="demo-section">
  <u-select>
    <span>Current: {{ value1 }}</span>
    <template #content>
      <u-list v-model="value1">
        <u-list-item :value="i" v-for="i in 10">Option {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>Current: {{ value1 }}</span>
    <template #content>
      <u-list v-model="value1">
        <u-list-item :value="i" v-for="i in 10">Option {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('1');
</script>
```

## Theme Color

Set the selected state color via the `color` attribute of `u-list`.

<div class="demo-section">
  <u-select>
    <span>Current: {{ value2 }}</span>
    <template #content>
      <u-list v-model="value2" color="success">
        <u-list-item :value="i" v-for="i in 10">Option {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>Current: {{ value2 }}</span>
    <template #content>
      <u-list v-model="value2" color="success">
        <u-list-item :value="i" v-for="i in 10">Option {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value2 = ref('1');
</script>
```

## Custom Border Radius

Customize list item border radius via `radius` attribute.

<div class="demo-section">
  <u-select>
    <span>Current: {{ value3 }}</span>
    <template #content>
      <u-list v-model="value3">
        <u-list-item radius="8px 0 8px 0" :value="i" v-for="i in 10">
          Option {{ i }}
        </u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>Current: {{ value3 }}</span>
    <template #content>
      <u-list v-model="value3">
        <u-list-item radius="8px 0 8px 0" :value="i" v-for="i in 10">
          Option {{ i }}
        </u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value3 = ref('1');
</script>
```

## Custom Item Height

Customize list item height via `height` attribute.

<div class="demo-section">
  <u-select>
    <span>Current: {{ value4 }}</span>
    <template #content>
      <u-list v-model="value4">
        <u-list-item height="60px" :value="i" v-for="i in 10">
          Option {{ i }}
        </u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>Current: {{ value4 }}</span>
    <template #content>
      <u-list v-model="value4">
        <u-list-item height="60px" :value="i" v-for="i in 10">
          Option {{ i }}
        </u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value4 = ref('1');
</script>
```

## Disabled

Disable the selector via the `disabled` attribute.

<div class="demo-section">
  <u-select disabled>
    <span>Disabled</span>
    <template #content>
      <u-list v-model="value5">
        <u-list-item :value="i" v-for="i in 5">Option {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select disabled>
    <span>Disabled</span>
    <template #content>
      <u-list v-model="value5">
        <u-list-item :value="i" v-for="i in 5">Option {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value5 = ref('1');
</script>
```

## USelect API

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| visible | Whether visible | `boolean` | `false` |
| disabled | Whether disabled | `boolean` | `false` |

## USelect Slots

| Slot | Description |
|------|-------------|
| default | Trigger content |
| content | Dropdown content |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('1');
  const value2 = ref('1');
  const value3 = ref('1');
  const value4 = ref('1');
  const value5 = ref('1');
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
</style>
