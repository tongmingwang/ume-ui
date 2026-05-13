export interface ButtonProps {
  color?: 'primary' | 'success' | 'warning' | 'error' | '';
  size?: 'mini' | 'small' | 'medium' | 'large' | '';
  disabled?: boolean;
  loading?: boolean;
  variant?: 'outlined' | 'text' | 'contained' | 'tonal' | '';
  shape?: 'round' | 'circle' | '';
  height?: string;
  width?: string;
  text?: string;
}
