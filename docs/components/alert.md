# Alert

Alert displays important information to attract users' attention and can contain icons and action buttons.

## Basic Usage

Alerts support four color variants: primary, success, warning, and error.

<div class="demo-alert">
  <u-alert color="success">This is a success message</u-alert>
  <u-alert color="warning">This is a warning message</u-alert>
  <u-alert color="error">This is an error message</u-alert>
  <u-alert color="primary">This is a primary message</u-alert>
</div>

```vue
<template>
  <u-alert color="success">This is a success message</u-alert>
  <u-alert color="warning">This is a warning message</u-alert>
  <u-alert color="error">This is an error message</u-alert>
  <u-alert color="primary">This is a primary message</u-alert>
</template>
```

## Different Variants

Alerts support three variant styles: tonal (default), outlined, and filled.

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

## With Title

Add a title to the alert using the `title` attribute.

<div class="demo-alert">
  <u-alert title="Success" color="success">This is a success message</u-alert>
  <u-alert title="Warning" color="warning">This is a warning message</u-alert>
  <u-alert title="Error" color="error">This is an error message</u-alert>
  <u-alert title="Info" color="primary">This is an info message</u-alert>
</div>

```vue
<template>
  <u-alert title="Success" color="success">This is a success message</u-alert>
  <u-alert title="Warning" color="warning">This is a warning message</u-alert>
  <u-alert title="Error" color="error">This is an error message</u-alert>
  <u-alert title="Info" color="primary">This is an info message</u-alert>
</template>
```

## With Action

Add an action button using the `action` slot.

<div class="demo-alert">
  <u-alert title="Action" color="primary">
    This is a message
    <template #action>
      <u-button>Close</u-button>
    </template>
  </u-alert>
</div>

```vue
<template>
  <u-alert title="Action" color="primary">
    This is a message
    <template #action>
      <u-button>Close</u-button>
    </template>
  </u-alert>
</template>
```

## Custom Icon

Customize the icon using the `icon` slot.

<div class="demo-alert">
  <u-alert title="Search">
    This is a message
    <template #icon>
      <u-icon name="search" size="24px"></u-icon>
    </template>
    <template #action>
      <u-button>Close</u-button>
    </template>
  </u-alert>
</div>

```vue
<template>
  <u-alert title="Search">
    This is a message
    <template #icon>
      <u-icon name="search" size="24px"></u-icon>
    </template>
    <template #action>
      <u-button>Close</u-button>
    </template>
  </u-alert>
</template>
```

## API

| Attribute | Description          | Type                                     | Default   |
| --------- | -------------------- | ---------------------------------------- | --------- |
| color     | Alert color          | `primary \| success \| warning \| error` | `primary` |
| variant   | Alert variant        | `tonal \| outlined \| filled`            | `tonal`   |
| showIcon  | Whether to show icon | `boolean`                                | `true`    |
| title     | Alert title          | `string`                                 | -         |
| message   | Alert message        | `string`                                 | -         |

## Slots

| Name    | Description           |
| ------- | --------------------- |
| default | Alert message content |
| icon    | Custom icon slot      |
| action  | Action button slot    |
| title   | Custom title slot     |

<style scoped>
  .demo-alert {
    margin-bottom: 16px;
  }
</style>
