import type { Ref } from 'vue';

export interface UListProps {
  modelValue: string | number;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}

export interface UListItemProps {
  value?: string | number;
  disabled?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  radius?: '0px';
  height?: string;
}

export type UListProvider = {
  active: Ref<string>;
  setActive: (value: string | number) => void;
} | null;
