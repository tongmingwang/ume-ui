# Switch 开关

开关组件，用于在两种状态之间进行切换。

<style scoped>
.switch-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
</style>

## 基础用法

最简单的开关形式，通过 `v-model` 进行双向绑定。

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

## 不同颜色

开关支持多种主题颜色：primary、success、warning、error。

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

## 不同尺寸

开关支持多种尺寸：mini、small、medium、large。

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

## 禁用状态

通过 `disabled` 属性禁用开关。

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

## 自定义文本

使用插槽自定义选中和未选中状态的文本。

<div class="switch-group">
  <u-switch v-model="textChecked">
    <template #checked>开</template>
    <template #unchecked>关</template>
  </u-switch>
</div>

```vue
<template>
  <u-switch v-model="checked">
    <template #checked>开</template>
    <template #unchecked>关</template>
  </u-switch>
</template>

<script setup>
  import { ref } from 'vue';

  const checked = ref(true);
</script>
```

## 自定义图标

使用插槽自定义选中和未选中状态的图标。

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

### Switch 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| modelValue | 绑定值，使用 v-model | `boolean` | - | `false` |
| disabled | 是否禁用 | `boolean` | - | `false` |
| size | 开关尺寸 | `string` | `mini` `small` `medium` `large` | `medium` |
| color | 主题颜色 | `string` | `primary` `success` `warning` `error` | - |
| checked | 选中状态文本 | `string` | - | - |
| unchecked | 未选中状态文本 | `string` | - | - |

### Switch 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 绑定值变化时触发 | `(value: boolean)` |
| update:modelValue | 更新 modelValue | `(value: boolean)` |

### Switch 插槽

| 名称 | 说明 |
|------|------|
| checked | 自定义选中状态文本 |
| unchecked | 自定义未选中状态文本 |
| checked-icon | 自定义选中状态图标 |
| unchecked-icon | 自定义未选中状态图标 |

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