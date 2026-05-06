# Select 选择器

下拉选择器组件，支持自定义内容。

**依赖组件：**

- `UList` - 列表容器组件
- `UListItem` - 列表项组件

## 基础用法

最简单的选择器用法，通过 `content` 插槽自定义下拉内容。

<div class="demo-section">
  <u-select>
    <span>当前选择: {{ value1 }}</span>
    <template #content>
      <u-list v-model="value1">
        <u-list-item :value="i" v-for="i in 10">选项 {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>当前选择: {{ value1 }}</span>
    <template #content>
      <u-list v-model="value1">
        <u-list-item :value="i" v-for="i in 10">选项 {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('1');
</script>
```

## 设置色彩

通过 `u-list` 的 `color` 属性设置选中状态的颜色。

<div class="demo-section">
  <u-select>
    <span>当前选择: {{ value2 }}</span>
    <template #content>
      <u-list v-model="value2" color="success">
        <u-list-item :value="i" v-for="i in 10">选项 {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>当前选择: {{ value2 }}</span>
    <template #content>
      <u-list v-model="value2" color="success">
        <u-list-item :value="i" v-for="i in 10">选项 {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value2 = ref('1');
</script>
```

## 自定义列表项样式

通过 `radius` 属性自定义列表项的圆角。

<div class="demo-section">
  <u-select>
    <span>当前选择: {{ value3 }}</span>
    <template #content>
      <u-list v-model="value3">
        <u-list-item radius="8px 0 8px 0" :value="i" v-for="i in 10">
          选项 {{ i }}
        </u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>当前选择: {{ value3 }}</span>
    <template #content>
      <u-list v-model="value3">
        <u-list-item radius="8px 0 8px 0" :value="i" v-for="i in 10">
          选项 {{ i }}
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

## 自定义列表项高度

通过 `height` 属性自定义列表项的高度。

<div class="demo-section">
  <u-select>
    <span>当前选择: {{ value4 }}</span>
    <template #content>
      <u-list v-model="value4">
        <u-list-item height="60px" :value="i" v-for="i in 10">
          选项 {{ i }}
        </u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select>
    <span>当前选择: {{ value4 }}</span>
    <template #content>
      <u-list v-model="value4">
        <u-list-item height="60px" :value="i" v-for="i in 10">
          选项 {{ i }}
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

## 禁用状态

通过 `disabled` 属性禁用选择器。

<div class="demo-section">
  <u-select disabled>
    <span>已禁用</span>
    <template #content>
      <u-list v-model="value5">
        <u-list-item :value="i" v-for="i in 5">选项 {{ i }}</u-list-item>
      </u-list>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select disabled>
    <span>已禁用</span>
    <template #content>
      <u-list v-model="value5">
        <u-list-item :value="i" v-for="i in 5">选项 {{ i }}</u-list-item>
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

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| visible  | 是否显示 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

## USelect 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 触发器内容 |
| content | 下拉内容   |

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
