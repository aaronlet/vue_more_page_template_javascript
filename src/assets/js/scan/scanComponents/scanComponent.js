import Vue from "vue";

import resetName from "@/assets/js/scan/resetName";
import getDirName from "@/assets/js/scan/getDirName";

const scanComponents = (dirName) => {
  const srcContext = require.context('@/components', true, /\.vue$/);
  let components = [];
  srcContext.keys().forEach(item => {
    let component = srcContext(item);
    let name = resetName(item,"vue");
    let dir = getDirName(item,"vue");
    if(dir === dirName){
      components.push({name,component});
    }
  })
  return components;
};

export default scanComponents;