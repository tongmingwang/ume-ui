import { ref } from 'vue';
export const usePosition = () => {
  const position = ref('');

  const updatePosition = async (
    target: HTMLElement,
    content: HTMLDivElement
  ) => {
    if (!target) return;
    await new Promise((resolve) => setTimeout(resolve, 0));
    const { top, left, width, height } = target?.getBoundingClientRect();
    const contentRect = content?.getBoundingClientRect();
    // 判断当前宽高是否超出屏幕
    const h = contentRect.height / 0.88 + 4;
    let y = top + height;

    if (y + h > window.innerHeight) {
      y = window.innerHeight - h;
      console.log(y, h, window.innerHeight);
    }
    position.value = `position:fixed;top: ${y}px; left: ${left}px; min-width: ${width}px;`;
  };
  const resetPosition = () => {
    position.value = '';
  };
  return { position, updatePosition, resetPosition };
};
