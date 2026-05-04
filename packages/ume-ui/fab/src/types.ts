export interface FabProps {
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | '';
  size?: 'small' | 'medium' | 'large' | 'extended' | '';
  disabled?: boolean;
  loading?: boolean;
  fixed?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  shadow?: boolean;
  ripple?: boolean;
  height?: string;
  width?: string;
  label?: string;
}
