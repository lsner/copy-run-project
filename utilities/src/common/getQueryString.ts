/**
 * Created by wanghang on 2017/4/12.
 */

export const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let r = window.location.search.substr(1).match(reg);
  if(r!=null){
    return  decodeURI(r[2])
  }else{
    return null
  }
};
