import { withInstallComponent } from '@/utils/install';

import URadio from './src/URadio.vue';
import URadioGroup from './src/URadioGroup.vue';

export const radio = withInstallComponent(URadio);
export const radioGroup = withInstallComponent(URadioGroup);
export { URadio, URadioGroup };
