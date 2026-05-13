export interface USwitchProps {
  modelValue: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large' | '';
  color?: 'primary' | 'success' | 'warning' | 'error' | '';
  checked?: string;
  unchecked?: string;
  checkedIcon?: string;
  uncheckedIcon?: string;
}
