# Ripple 水波纹指令

Ripple 指令为交互元素添加 Material Design 水波纹效果，在用户与按钮或其他组件交互时提供视觉反馈。

## 基础用法

点击以下按钮体验水波纹效果：

<div class="demo-section">
  <button v-ripple class="ripple-button">点击我！</button>
  <div v-ripple class="ripple-area">水波区域</div>
</div>

```vue
<template>
  <div class="container">
    <button v-ripple class="ripple-button">点击我！</button>
    <div v-ripple class="ripple-area">水波区域</div>
  </div>
</template>

<script setup>
  import { ripple } from 'ume-ui';
</script>

<style scoped>
  .container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .ripple-button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #1890ff;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }

  .ripple-area {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
```

## 圆形元素

对于圆形元素，水波纹从中心开始向外扩散：

<div class="demo-section">
  <button v-ripple class="ripple-circle">圆形按钮</button>
</div>

```vue
<template>
  <button v-ripple class="ripple-circle">圆形按钮</button>
</template>

<style scoped>
  .ripple-circle {
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
    background-color: #52c41a;
    color: white;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

## 特性

### 触摸事件支持

指令支持触摸设备，在移动端同样可以体验流畅的水波纹效果。

### 自动定位

水波纹会精确出现在点击位置，对于方形元素从点击点向外扩散，对于圆形元素从中心开始。

### 自动样式处理

指令会自动处理元素的定位和溢出样式：

- 如果元素是 `position: static`，自动设置为 `position: relative`
- 自动设置 `overflow: hidden` 防止水波纹溢出

### 智能清理

- 鼠标/手指松开时自动淡出并移除水波纹
- 鼠标离开元素时自动清理所有水波纹

## 工作原理

水波纹效果的工作原理：

1. 在元素内部创建一个容器用于容纳水波纹
2. 监听 `mousedown` 和 `touchstart` 事件
3. 在点击位置创建圆形水波纹元素
4. 使用 Web Animation API 实现平滑的缩放动画
5. 监听 `mouseup`、`touchend`、`mouseleave` 事件，完成后淡出并移除元素

## 使用注意事项

- 导入 ume-ui 时会自动注册 ripple 指令
- 水波纹颜色与元素的文字颜色相同（通过 `color` CSS 属性获取）
- 对于圆形元素（宽高相等），水波纹将从中心开始
- 支持自定义元素，不限于按钮

<style scoped>
  .demo-section {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .ripple-button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #1890ff;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }

  .ripple-area {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  .ripple-circle {
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
    background-color: #52c41a;
    color: white;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
