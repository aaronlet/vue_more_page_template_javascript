import resetName from "@/assets/js/scan/resetName";
import getDirName from "@/assets/js/scan/getDirName";

const scanStore = (dirName) => {
  let storeList = [];
  const srcContext = require.context('@/store', true, /\.js$/);
  srcContext.keys().forEach((item) => {
    if(!item.includes("index.js")){
      let store = srcContext(item).default;
      let name = resetName(item,"js");
      if(getDirName(item,"js") === dirName){
        storeList.push({name,store});
      }
    }
  })
  return storeList;
};

export default scanStore;