export interface AlertProps {
  color?: 'primary' | 'success' | 'warning' | 'error';
  variant?: 'outlined' | 'filled' | 'tonal';
  showIcon?: boolean; // 是否显示图标
  title?: string;
  message?: string;
}
