import type { InjectionKey, Ref } from 'vue';

export interface RadioProps {
  value?: string | number | boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  color?: 'primary' | 'warning' | 'error' | 'success' | 'info' | '';
}

export interface RadioGroupProps {
  modelValue?: string | number | boolean;
  disabled?: boolean;
  name?: string;
  color?: 'primary' | 'warning' | 'error' | 'success' | 'info' | '';
  vertical?: boolean;
}

export interface RadioGroupContext {
  modelValue?: Ref<RadioProps['value']>;
  disabled?: boolean;
  color?: string;
  updateValue: (value: RadioProps['value']) => void;
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol('URadioGroup');
