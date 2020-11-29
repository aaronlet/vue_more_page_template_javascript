import resetName from "@/assets/js/scan/resetName";
import getDirName from "@/assets/js/scan/getDirName";

const scanApi = (dirName) => {
  const srcContext = require.context('@/api', true, /\.js$/);
  let apiList = [];
  srcContext.keys().forEach((api) => {
    if(!api.includes("index.js")){
      let apiInfo = srcContext(api).default;
      let name = resetName(api,"js");
      let dir = getDirName(api,"js");
      if(dir === dirName){
        apiList.push({name,methodInfo:apiInfo})
      }
    }
  })
  return apiList;
};

export default scanApi;