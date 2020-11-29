function getDirName(name,r){
  let reg = new RegExp(`\\.${r}$`,"i");
  let url = name.split('/');
  let dirName = url[1] || "";
  return dirName;
}

export default getDirName;
