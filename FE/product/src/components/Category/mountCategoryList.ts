import { createApp } from "vue";

import CategoryList from "../Category/CategoryList.vue";

export default (el: any, props: any) => {
  createApp(CategoryList, props).mount(el);
};
