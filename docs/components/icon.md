# Icon

Icons are used to visually represent actions and information. Click on any icon to copy its name.

<script setup>
import { ref, onMounted } from 'vue';
import UIcon from '../../packages/ume-ui/icon/src/UIcon.vue';
import '../../packages/ume-ui/icon/src/icon.css';
import icons from '../public/uicon.json'

const copied = ref('');

const copyIcon = (icon) => {
  navigator.clipboard.writeText(`<u-icon name="${icon.font_class}" />`);
  copied.value = icon.font_class;
  setTimeout(() => copied.value = '', 1500);
};

</script>

## Icon Usage

Use the `name` property to specify the icon. Click on any icon card to copy the code.

### Import

Icon component supports on-demand import:

```vue
<script setup>
  import { UIcon } from 'ume-ui';
  import 'ume-ui/icon/index.css';
</script>

<template>
  <u-icon name="search" />
</template>
```

### Basic Usage

<u-icon name="search" size="20"></u-icon>
<u-icon name="favorfill" size="20" color="#e6a23c"></u-icon>
<u-icon name="roundclosefill" size="20" color="#f56c6c"></u-icon>
<u-icon name="roundcheckfill" size="20" color="#67c23a"></u-icon>

```vue
<template>
  <u-icon name="search" size="20"></u-icon>
  <u-icon name="favorfill" size="20" color="#e6a23c"></u-icon>
  <u-icon name="roundclosefill" size="20" color="#f56c6c"></u-icon>
  <u-icon name="roundcheckfill" size="20" color="#67c23a"></u-icon>
</template>
```

### Custom Size

Use the `size` property to set icon size.

<u-icon name="favor" size="16"></u-icon>
<u-icon name="favor" size="24"></u-icon>
<u-icon name="favor" size="32"></u-icon>
<u-icon name="favor" size="48"></u-icon>

```vue
<template>
  <u-icon name="favor" size="16"></u-icon>
  <u-icon name="favor" size="24"></u-icon>
  <u-icon name="favor" size="32"></u-icon>
  <u-icon name="favor" size="48"></u-icon>
</template>
```

### Custom Color

Use the `color` property to set icon color.

<u-icon name="favorfill" size="24" color="#409eff"></u-icon>
<u-icon name="favorfill" size="24" color="#67c23a"></u-icon>
<u-icon name="favorfill" size="24" color="#e6a23c"></u-icon>
<u-icon name="favorfill" size="24" color="#f56c6c"></u-icon>
<u-icon name="favorfill" size="24" color="#909399"></u-icon>

```vue
<template>
  <u-icon name="favorfill" size="24" color="#409eff"></u-icon>
  <u-icon name="favorfill" size="24" color="#67c23a"></u-icon>
  <u-icon name="favorfill" size="24" color="#e6a23c"></u-icon>
  <u-icon name="favorfill" size="24" color="#f56c6c"></u-icon>
  <u-icon name="favorfill" size="24" color="#909399"></u-icon>
</template>
```

## Icon Gallery

Click on any icon to copy `<u-icon name="..." />` code.

<div class="icon-gallery">
  <div 
    v-for="icon in icons.glyphs" 
    :key="icon.font_class"
    class="icon-card"
    :class="{ copied: copied === icon.font_class }"
    @click="copyIcon(icon)"
  >
    <u-icon :name="icon.font_class" size="28"></u-icon>
    <span class="icon-name">{{ icon.font_class }}</span>
    <span class="icon-class">{{ icon.font_class }}</span>
  </div>
</div>

## API

| Property | Description                  | Type             | Default |
| -------- | ---------------------------- | ---------------- | ------- |
| name     | Icon name                    | string           | ''      |
| size     | Icon size (e.g., '20px', 24) | string \| number | ''      |
| color    | Icon color                   | string           | ''      |

<style scoped>
.icon-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: #fff;
}
.icon-card:hover {
  border-color: #409eff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
}
.icon-card.copied {
  border-color: #67c23a;
  background: #f0f9eb;
}
.icon-card .icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #606266;
  text-align: center;
  word-break: break-all;
}
.icon-card .icon-class {
  margin-top: 4px;
  font-size: 11px;
  color: #909399;
  font-family: monospace;
}
</style>
