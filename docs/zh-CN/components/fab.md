# Fab 悬浮按钮

悬浮操作按钮（Floating Action Button）是一个特殊的圆形按钮，用于表示应用程序中最重要的操作。它通常固定在屏幕的某个位置，带有阴影和悬浮动画效果，类似于 Material Design 中的 FAB 组件。

<style scoped>
.fab-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
}
</style>

## 基础用法

最基本的悬浮按钮形式，支持不同的颜色主题。

<div class="fab-group">
  <u-fab>+</u-fab>
  <u-fab color="success">+</u-fab>
  <u-fab color="warning">+</u-fab>
  <u-fab color="error">+</u-fab>
  <u-fab color="info">+</u-fab>
</div>

```vue
<template>
  <u-fab>+</u-fab>
  <u-fab color="success">+</u-fab>
  <u-fab color="warning">+</u-fab>
  <u-fab color="error">+</u-fab>
  <u-fab color="info">+</u-fab>
</template>
```

## 不同尺寸

悬浮按钮支持四种不同的尺寸：small、medium、large，以及 extended 扩展样式。

<div class="fab-group">
  <u-fab size="small">+</u-fab>
  <u-fab size="medium">+</u-fab>
  <u-fab size="large">+</u-fab>
</div>

```vue
<template>
  <u-fab size="small">+</u-fab>
  <u-fab size="medium">+</u-fab>
  <u-fab size="large">+</u-fab>
</template>
```

## 扩展按钮

Extended FAB 支持显示文字，可以选择是否同时显示图标。

<div class="fab-group">
  <u-fab size="extended" color="primary">
    <template #icon>+</template>
    新建
  </u-fab>
  <u-fab size="extended" color="success" label="创建"></u-fab>
  <u-fab size="extended" color="error">
    <template #icon>🗑</template>
    删除
  </u-fab>
</div>

```vue
<template>
  <u-fab size="extended" color="primary">
    <template #icon>+</template>
    新建
  </u-fab>
  
  <u-fab size="extended" color="success" label="创建"></u-fab>
  
  <u-fab size="extended" color="error">
    <template #icon>🗑</template>
    删除
  </u-fab>
</template>
```

## 按钮状态

悬浮按钮支持禁用、加载和无阴影状态。

<div class="fab-group">
  <u-fab disabled color="primary">×</u-fab>
  <u-fab loading color="primary"></u-fab>
  <u-fab :shadow="false" color="primary">+</u-fab>
</div>

```vue
<template>
  <u-fab disabled color="primary">×</u-fab>
  <u-fab loading color="primary"></u-fab>
  <u-fab :shadow="false" color="primary">+</u-fab>
</template>
```

## 固定定位

通过 `fixed` 属性和 `top`、`right`、`bottom`、`left` 属性，可以将悬浮按钮固定在屏幕的任意位置。

::: tip
滚动页面观察，按钮会保持在固定位置
:::

```vue
<template>
  <u-fab 
    color="primary" 
    fixed 
    bottom="24px" 
    right="24px"
    @click="handleAction"
  >
    +
  </u-fab>

  <u-fab 
    color="error" 
    size="small"
    fixed 
    bottom="100px" 
    right="24px"
  >
    ↑
  </u-fab>
</template>
```

## Props

| 属性名 | 说明 | 类型 | 默认值 | 可选值 |
| ------ | ---- | ---- | ------ | ------ |
| color | 按钮颜色主题 | string | `primary` | primary / success / warning / error / info |
| size | 按钮尺寸 | string | `medium` | small / medium / large / extended |
| disabled | 是否禁用 | boolean | `false` | - |
| loading | 是否显示加载状态 | boolean | `false` | - |
| fixed | 是否固定定位 | boolean | `false` | - |
| top | 固定定位时的 top 值 | string | - | 如 `24px` |
| right | 固定定位时的 right 值 | string | - | 如 `24px` |
| bottom | 固定定位时的 bottom 值 | string | - | 如 `24px` |
| left | 固定定位时的 left 值 | string | - | 如 `24px` |
| shadow | 是否显示阴影 | boolean | `true` | - |
| label | Extended 模式下的按钮文字 | string | - | - |
| width | 按钮宽度 | string | - | - |
| height | 按钮高度 | string | - | - |

## 方法

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |
| focus | 让按钮获得焦点 | - |
| blur | 让按钮失去焦点 | - |

## 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| default | 按钮内容或文字，extended 模式下为标签文字 |
| icon | 自定义图标 |
