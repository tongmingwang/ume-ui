import { SIZE_MAP } from '@/ume-ui/config';

export function useSize(size: keyof typeof SIZE_MAP) {
  return SIZE_MAP[size];
}
