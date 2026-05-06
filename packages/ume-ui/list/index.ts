import { withInstallComponent } from '@/utils/install';

import UList from './src/UList.vue';
import UListItem from './src/UListItem.vue';

export const list = withInstallComponent(UList);
export const listItem = withInstallComponent(UListItem);

export { UList, UListItem };
