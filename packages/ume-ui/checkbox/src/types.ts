export interface CheckboxProps {
  modelValue?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  name?: string;
  color?: 'primary' | 'warning' | 'error' | 'success' | 'info' | '';
}
