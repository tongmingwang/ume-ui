# Alert 警告提示

Alert 用于展示重要信息以吸引用户注意，可包含图标和操作按钮。

## 基础用法

警告提示支持四种颜色变体：primary、success、warning 和 error。

<div class="demo-alert">
  <u-alert color="success">这是一条成功消息</u-alert>
  <u-alert color="warning">这是一条警告消息</u-alert>
  <u-alert color="error">这是一条错误消息</u-alert>
  <u-alert color="primary">这是一条主要消息</u-alert>
</div>

```vue
<template>
  <u-alert color="success">这是一条成功消息</u-alert>
  <u-alert color="warning">这是一条警告消息</u-alert>
  <u-alert color="error">这是一条错误消息</u-alert>
  <u-alert color="primary">这是一条主要消息</u-alert>
</template>
```

## 不同变体

警告提示支持三种样式变体：tonal（默认）、outlined 和 filled。

<div class="demo-alert">
  <u-alert color="primary">Tonal</u-alert>
  <u-alert variant="outlined" color="primary">Outlined</u-alert>
  <u-alert variant="filled" color="primary">Filled</u-alert>
</div>

```vue
<template>
  <u-alert color="primary">Tonal</u-alert>
  <u-alert variant="outlined" color="primary">Outlined</u-alert>
  <u-alert variant="filled" color="primary">Filled</u-alert>
</template>
```

## 带标题

使用 `title` 属性为警告提示添加标题。

<div class="demo-alert">
  <u-alert title="成功" color="success">这是一条成功消息</u-alert>
  <u-alert title="警告" color="warning">这是一条警告消息</u-alert>
  <u-alert title="错误" color="error">这是一条错误消息</u-alert>
  <u-alert title="信息" color="primary">这是一条信息消息</u-alert>
</div>

```vue
<template>
  <u-alert title="成功" color="success">这是一条成功消息</u-alert>
  <u-alert title="警告" color="warning">这是一条警告消息</u-alert>
  <u-alert title="错误" color="error">这是一条错误消息</u-alert>
  <u-alert title="信息" color="primary">这是一条信息消息</u-alert>
</template>
```

## 带操作按钮

使用 `action` 插槽添加操作按钮。

<div class="demo-alert">
  <u-alert title="操作" color="primary">
    这是一条消息
    <template #action>
      <u-button>关闭</u-button>
    </template>
  </u-alert>
</div>

```vue
<template>
  <u-alert title="操作" color="primary">
    这是一条消息
    <template #action>
      <u-button>关闭</u-button>
    </template>
  </u-alert>
</template>
```

## 自定义图标

使用 `icon` 插槽自定义图标。

<div class="demo-alert">
  <u-alert title="搜索">
    这是一条消息
    <template #icon>
      <u-icon name="search" size="24px"></u-icon>
    </template>
    <template #action>
      <u-button>关闭</u-button>
    </template>
  </u-alert>
</div>

```vue
<template>
  <u-alert title="搜索">
    这是一条消息
    <template #icon>
      <u-icon name="search" size="24px"></u-icon>
    </template>
    <template #action>
      <u-button>关闭</u-button>
    </template>
  </u-alert>
</template>
```

## API

| 属性     | 说明         | 类型                                     | 默认值    |
| -------- | ------------ | ---------------------------------------- | --------- |
| color    | 警告提示颜色 | `primary \| success \| warning \| error` | `primary` |
| variant  | 警告提示变体 | `tonal \| outlined \| filled`            | `tonal`   |
| showIcon | 是否显示图标 | `boolean`                                | `true`    |
| title    | 警告提示标题 | `string`                                 | -         |
| message  | 警告提示消息 | `string`                                 | -         |

## 插槽

| 名称    | 说明             |
| ------- | ---------------- |
| default | 警告提示消息内容 |
| icon    | 自定义图标插槽   |
| action  | 操作按钮插槽     |
| title   | 自定义标题插槽   |

<style scoped>
  .demo-alert {
    margin-bottom: 16px;
  }
</style>
