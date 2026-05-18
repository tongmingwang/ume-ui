# Tabs 标签页

用于在不同内容区域之间进行切换，支持线型、卡片和按钮三种样式，并带有方向感知滑动动画。

## 基础用法

最简单的标签页用法，通过 `v-model` 绑定当前激活的标签页名称，使用 `UTab` 定义标签项和 `UPane` 定义内容面板。

<u-card style="padding: 16px;">
<u-tabs v-model="activeTab1">
  <u-tab :name="1">标签一</u-tab>
  <u-tab :name="2">标签二</u-tab>
  <u-tab :name="3">标签三</u-tab>
</u-tabs>
<u-panes :active-name="activeTab1">
  <u-pane :name="1">
    这是标签一的内容
  </u-pane>
  <u-pane :name="2">
    这是标签二的内容
  </u-pane>
  <u-pane :name="3">
    这是标签三的内容
  </u-pane>
</u-panes>
</u-card>

```vue
<template>
  <u-card style="padding: 16px;">
    <u-tabs v-model="activeTab1">
      <u-tab :name="1">标签一</u-tab>
      <u-tab :name="2">标签二</u-tab>
      <u-tab :name="3">标签三</u-tab>
    </u-tabs>
    <u-panes :active-name="activeTab1">
      <u-pane :name="1">这是标签一的内容</u-pane>
      <u-pane :name="2">这是标签二的内容</u-pane>
      <u-pane :name="3">这是标签三的内容</u-pane>
    </u-panes>
  </u-card>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## 对齐方式

通过 `align` 属性设置标签页的对齐方式，支持 `start`、`center` 和 `end` 三种对齐。

<u-card style="padding: 16px;">
  <u-tabs v-model="activeTab3" align="center">
  <u-tab :name="1">居中</u-tab>
  <u-tab :name="2">标签二</u-tab>
  <u-tab :name="3">标签三</u-tab>
</u-tabs>
<u-panes :active-name="activeTab3">
  <u-pane :name="1">
    <p>居中对齐的标签页内容</p>
  </u-pane>
  <u-pane :name="2">
    <p>这是标签二的内容</p>
  </u-pane>
  <u-pane :name="3">
    <p>这是标签三的内容</p>
  </u-pane>
</u-panes>
</u-card>

```vue
<template>
  <u-card style="padding: 16px;">
    <u-tabs v-model="activeTab3" align="center">
      <u-tab :name="1">居中</u-tab>
      <u-tab :name="2">标签二</u-tab>
      <u-tab :name="3">标签三</u-tab>
    </u-tabs>
    <u-panes :active-name="activeTab3">
      <u-pane :name="1">
        <p>居中对齐的标签页内容</p>
      </u-pane>
      <u-pane :name="2">
        <p>这是标签二的内容</p>
      </u-pane>
      <u-pane :name="3">
        <p>这是标签三的内容</p>
      </u-pane>
    </u-panes>
  </u-card>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## 禁用标签页

通过 `disabled` 属性禁用某个标签页，被禁用的标签页无法点击切换。

<u-tabs v-model="activeTab4">
  <u-tab :name="1">标签一</u-tab>
  <u-tab :name="2" :disabled="true">禁用</u-tab>
  <u-tab :name="3">标签三</u-tab>
</u-tabs>
<u-panes :active-name="activeTab4">
  <u-pane :name="1">
    <p>这是标签一的内容</p>
  </u-pane>
  <u-pane :name="2">
    <p>此内容无法访问</p>
  </u-pane>
  <u-pane :name="3">
    <p>这是标签三的内容</p>
  </u-pane>
</u-panes>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab :name="1">标签一</u-tab>
    <u-tab :name="2" :disabled="true">禁用</u-tab>
    <u-tab :name="3">标签三</u-tab>
  </u-tabs>
  <u-panes :active-name="activeTab">
    <u-pane :name="1">
      <p>这是标签一的内容</p>
    </u-pane>
    <u-pane :name="2">
      <p>此内容无法访问</p>
    </u-pane>
    <u-pane :name="3">
      <p>这是标签三的内容</p>
    </u-pane>
  </u-panes>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## 自定义面板颜色

通过 `color` 属性设置面板的背景色。

<u-tabs v-model="activeTab6">
  <u-tab :name="1">标签一</u-tab>
  <u-tab :name="2">标签二</u-tab>
</u-tabs>
<u-panes :active-name="activeTab6">
  <u-pane :name="1" color="var(--u-success)">
    <p>这是标签一的内容，带有自定义背景色</p>
  </u-pane>
  <u-pane :name="2" color="var(--u-primary)">
    <p>这是标签二的内容，带有主色调背景</p>
  </u-pane>
</u-panes>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab :name="1">标签一</u-tab>
    <u-tab :name="2">标签二</u-tab>
  </u-tabs>
  <u-panes :active-name="activeTab">
    <u-pane :name="1" color="var(--u-success)">
      <p>这是标签一的内容，带有自定义背景色</p>
    </u-pane>
    <u-pane :name="2" color="var(--u-primary)">
      <p>这是标签二的内容，带有主色调背景</p>
    </u-pane>
  </u-panes>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## 使用 label 属性

`UTab` 组件同时支持通过 `label` 属性或默认插槽设置标签文本。

<u-tabs v-model="activeTab7">
  <u-tab :name="1" label="标签一"></u-tab>
  <u-tab :name="2" label="标签二"></u-tab>
  <u-tab :name="3">使用插槽</u-tab>
</u-tabs>
<u-panes :active-name="activeTab7">
  <u-pane :name="1">
    <p>通过 label 属性设置标题</p>
  </u-pane>
  <u-pane :name="2">
    <p>标签二的内容</p>
  </u-pane>
  <u-pane :name="3">
    <p>通过插槽设置标题</p>
  </u-pane>
</u-panes>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab :name="1" label="标签一"></u-tab>
    <u-tab :name="2" label="标签二"></u-tab>
    <u-tab :name="3">使用插槽</u-tab>
  </u-tabs>
  <u-panes :active-name="activeTab">
    <u-pane :name="1">
      <p>通过 label 属性设置标题</p>
    </u-pane>
    <u-pane :name="2">
      <p>标签二的内容</p>
    </u-pane>
    <u-pane :name="3">
      <p>通过插槽设置标题</p>
    </u-pane>
  </u-panes>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## UTabs API

| 属性       | 说明           | 类型                            | 默认值    |
| ---------- | -------------- | ------------------------------- | --------- |
| modelValue | 当前激活的标签 | `string \| number \| undefined` | -         |
| names      | 标签名称数组   | `Array<string \| number>`       | -         |
| align      | 标签对齐方式   | `'start' \| 'center' \| 'end'`  | `'start'` |

| 事件              | 说明           | 回调参数                    |
| ----------------- | -------------- | --------------------------- |
| update:modelValue | 切换标签时触发 | `(value: string \| number)` |

## UTab API

| 属性     | 说明       | 类型                            | 默认值  |
| -------- | ---------- | ------------------------------- | ------- |
| name     | 标签页标识 | `string \| number`              | -       |
| label    | 标签页标题 | `string \| number \| undefined` | -       |
| disabled | 是否禁用   | `boolean`                       | `false` |

## UPanes API

| 属性       | 说明           | 类型                            | 默认值 |
| ---------- | -------------- | ------------------------------- | ------ |
| activeName | 当前激活的面板 | `string \| number \| undefined` | -      |
| names      | 面板名称数组   | `Array<string \| number>`       | -      |

## UPane API

| 属性  | 说明     | 类型                   | 默认值          |
| ----- | -------- | ---------------------- | --------------- |
| name  | 面板标识 | `string \| number`     | -               |
| color | 背景色   | `UColorType \| string` | `'var(--u-bg)'` |

<script setup>
import { ref } from 'vue';
const activeTab1 = ref(1);
const activeTab2 = ref(1);
const activeTab3 = ref(1);
const activeTab4 = ref(1);
const activeTab5 = ref(1);
const activeTab6 = ref(1);
const activeTab7 = ref(1);
</script>
