# Fab

A Floating Action Button (FAB) is a special circular button that represents the primary action in an application. It is typically fixed on the screen with elevation shadows and hover animations, similar to the FAB component in Material Design.

<style scoped>
.fab-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
}
</style>

## Basic Usage

Basic floating action button with different color themes.

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

## Different Sizes

Floating action buttons come in four different sizes: small, medium, large, and the extended variant.

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

## Extended FAB

Extended FAB supports displaying text, with optional icons.

<div class="fab-group">
  <u-fab size="extended" color="primary">
    <template #icon>+</template>
    Create
  </u-fab>
  <u-fab size="extended" color="success" label="Save"></u-fab>
  <u-fab size="extended" color="error">
    <template #icon>🗑</template>
    Delete
  </u-fab>
</div>

```vue
<template>
  <u-fab size="extended" color="primary">
    <template #icon>+</template>
    Create
  </u-fab>
  
  <u-fab size="extended" color="success" label="Save"></u-fab>
  
  <u-fab size="extended" color="error">
    <template #icon>🗑</template>
    Delete
  </u-fab>
</template>
```

## Button States

FAB supports disabled, loading, and no-shadow states.

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

## Fixed Positioning

Using the `fixed` prop along with `top`, `right`, `bottom`, `left` props, you can fix the floating button at any position on the screen.

::: tip
Scroll the page to observe the button remains in a fixed position
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

| Prop | Description | Type | Default | Accepted Values |
| ---- | ----------- | ---- | ------- | --------------- |
| color | Button color theme | string | `primary` | primary / success / warning / error / info |
| size | Button size | string | `medium` | small / medium / large / extended |
| disabled | Whether the button is disabled | boolean | `false` | - |
| loading | Whether to show loading state | boolean | `false` | - |
| fixed | Whether to use fixed positioning | boolean | `false` | - |
| top | Top value when fixed positioned | string | - | e.g., `24px` |
| right | Right value when fixed positioned | string | - | e.g., `24px` |
| bottom | Bottom value when fixed positioned | string | - | e.g., `24px` |
| left | Left value when fixed positioned | string | - | e.g., `24px` |
| shadow | Whether to show shadow | boolean | `true` | - |
| label | Button text in extended mode | string | - | - |
| width | Button width | string | - | - |
| height | Button height | string | - | - |

## Methods

| Method | Description | Parameters |
| ------ | ----------- | ---------- |
| focus | Focus the button | - |
| blur | Blur the button | - |

## Slots

| Slot Name | Description |
| --------- | ----------- |
| default | Button content or text label in extended mode |
| icon | Custom icon |
