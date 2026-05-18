# Tabs

Used to switch between different content areas, supporting line, card, and button styles with directional slide animation.

## Basic Usage

The simplest usage of tabs, binding the currently active tab name via `v-model`, using `UTab` for tab items and `UPane` for content panels.

<u-card style="padding: 16px;">
<u-tabs v-model="activeTab1">
  <u-tab :name="1">Tab One</u-tab>
  <u-tab :name="2">Tab Two</u-tab>
  <u-tab :name="3">Tab Three</u-tab>
</u-tabs>
<u-panes :active-name="activeTab1">
  <u-pane :name="1">
    This is the content of Tab One
  </u-pane>
  <u-pane :name="2">
    This is the content of Tab Two
  </u-pane>
  <u-pane :name="3">
    This is the content of Tab Three
  </u-pane>
</u-panes>
</u-card>

```vue
<template>
  <u-card style="padding: 16px;">
    <u-tabs v-model="activeTab1">
      <u-tab :name="1">Tab One</u-tab>
      <u-tab :name="2">Tab Two</u-tab>
      <u-tab :name="3">Tab Three</u-tab>
    </u-tabs>
    <u-panes :active-name="activeTab1">
      <u-pane :name="1">This is the content of Tab One</u-pane>
      <u-pane :name="2">This is the content of Tab Two</u-pane>
      <u-pane :name="3">This is the content of Tab Three</u-pane>
    </u-panes>
  </u-card>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## Alignment

Set the tab alignment via the `align` attribute, supporting `start`, `center`, and `end` alignments.

<u-card style="padding: 16px;">
  <u-tabs v-model="activeTab3" align="center">
  <u-tab :name="1">Center</u-tab>
  <u-tab :name="2">Tab Two</u-tab>
  <u-tab :name="3">Tab Three</u-tab>
</u-tabs>
<u-panes :active-name="activeTab3">
  <u-pane :name="1">
    <p>Center aligned tab content</p>
  </u-pane>
  <u-pane :name="2">
    <p>This is the content of Tab Two</p>
  </u-pane>
  <u-pane :name="3">
    <p>This is the content of Tab Three</p>
  </u-pane>
</u-panes>
</u-card>

```vue
<template>
  <u-card style="padding: 16px;">
    <u-tabs v-model="activeTab3" align="center">
      <u-tab :name="1">Center</u-tab>
      <u-tab :name="2">Tab Two</u-tab>
      <u-tab :name="3">Tab Three</u-tab>
    </u-tabs>
    <u-panes :active-name="activeTab3">
      <u-pane :name="1">
        <p>Center aligned tab content</p>
      </u-pane>
      <u-pane :name="2">
        <p>This is the content of Tab Two</p>
      </u-pane>
      <u-pane :name="3">
        <p>This is the content of Tab Three</p>
      </u-pane>
    </u-panes>
  </u-card>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## Disabled Tab

Disable a specific tab via the `disabled` attribute. Disabled tabs cannot be clicked to switch.

<u-tabs v-model="activeTab4">
  <u-tab :name="1">Tab One</u-tab>
  <u-tab :name="2" :disabled="true">Disabled</u-tab>
  <u-tab :name="3">Tab Three</u-tab>
</u-tabs>
<u-panes :active-name="activeTab4">
  <u-pane :name="1">
    <p>This is the content of Tab One</p>
  </u-pane>
  <u-pane :name="2">
    <p>This content is not accessible</p>
  </u-pane>
  <u-pane :name="3">
    <p>This is the content of Tab Three</p>
  </u-pane>
</u-panes>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab :name="1">Tab One</u-tab>
    <u-tab :name="2" :disabled="true">Disabled</u-tab>
    <u-tab :name="3">Tab Three</u-tab>
  </u-tabs>
  <u-panes :active-name="activeTab">
    <u-pane :name="1">
      <p>This is the content of Tab One</p>
    </u-pane>
    <u-pane :name="2">
      <p>This content is not accessible</p>
    </u-pane>
    <u-pane :name="3">
      <p>This is the content of Tab Three</p>
    </u-pane>
  </u-panes>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## Custom Panel Color

Set the panel background color via the `color` attribute.

<u-tabs v-model="activeTab6">
  <u-tab :name="1">Tab One</u-tab>
  <u-tab :name="2">Tab Two</u-tab>
</u-tabs>
<u-panes :active-name="activeTab6">
  <u-pane :name="1" color="var(--u-success)">
    <p>This is the content of Tab One with custom background</p>
  </u-pane>
  <u-pane :name="2" color="var(--u-primary)">
    <p>This is the content of Tab Two with green background</p>
  </u-pane>
</u-panes>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab :name="1">Tab One</u-tab>
    <u-tab :name="2">Tab Two</u-tab>
  </u-tabs>
  <u-panes :active-name="activeTab">
    <u-pane :name="1" color="var(--u-success)">
      <p>This is the content of Tab One with custom background</p>
    </u-pane>
    <u-pane :name="2" color="var(--u-primary)">
      <p>This is the content of Tab Two with green background</p>
    </u-pane>
  </u-panes>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## Using Label Attribute

The `UTab` component supports both the `label` attribute or the default slot for setting the tab text.

<u-tabs v-model="activeTab7">
  <u-tab :name="1" label="Tab One"></u-tab>
  <u-tab :name="2" label="Tab Two"></u-tab>
  <u-tab :name="3">Using Slot</u-tab>
</u-tabs>
<u-panes :active-name="activeTab7">
  <u-pane :name="1">
    <p>Set title via label attribute</p>
  </u-pane>
  <u-pane :name="2">
    <p>Content of Tab Two</p>
  </u-pane>
  <u-pane :name="3">
    <p>Set title via slot</p>
  </u-pane>
</u-panes>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab :name="1" label="Tab One"></u-tab>
    <u-tab :name="2" label="Tab Two"></u-tab>
    <u-tab :name="3">Using Slot</u-tab>
  </u-tabs>
  <u-panes :active-name="activeTab">
    <u-pane :name="1">
      <p>Set title via label attribute</p>
    </u-pane>
    <u-pane :name="2">
      <p>Content of Tab Two</p>
    </u-pane>
    <u-pane :name="3">
      <p>Set title via slot</p>
    </u-pane>
  </u-panes>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref(1);
</script>
```

## UTabs API

| Attribute  | Description          | Type                            | Default   |
| ---------- | -------------------- | ------------------------------- | --------- |
| modelValue | Currently active tab | `string \| number \| undefined` | -         |
| names      | Array of tab names   | `Array<string \| number>`       | -         |
| align      | Tab alignment        | `'start' \| 'center' \| 'end'`  | `'start'` |

| Event             | Description                | Callback Params             |
| ----------------- | -------------------------- | --------------------------- |
| update:modelValue | Triggered when tab changes | `(value: string \| number)` |

## UTab API

| Attribute | Description      | Type                            | Default |
| --------- | ---------------- | ------------------------------- | ------- |
| name      | Tab identifier   | `string \| number`              | -       |
| label     | Tab title        | `string \| number \| undefined` | -       |
| disabled  | Whether disabled | `boolean`                       | `false` |

## UPanes API

| Attribute  | Description            | Type                            | Default |
| ---------- | ---------------------- | ------------------------------- | ------- |
| activeName | Currently active panel | `string \| number \| undefined` | -       |
| names      | Array of panel names   | `Array<string \| number>`       | -       |

## UPane API

| Attribute | Description      | Type                   | Default         |
| --------- | ---------------- | ---------------------- | --------------- |
| name      | Panel identifier | `string \| number`     | -               |
| color     | Background color | `UColorType \| string` | `'var(--u-bg)'` |

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
