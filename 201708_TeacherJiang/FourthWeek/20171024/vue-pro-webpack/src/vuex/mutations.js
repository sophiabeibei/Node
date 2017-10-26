import * as Types from "./mutations-types";
export default{//->[]会将里面的内容作为变量
  [Types.ADD_COLLECT](state, book){//{id: ,book,}   增加
    //->逻辑: 判断当前state中的collects中是否包含id和我要添加的id相同的;如果有则取消push;
    let flag = state.collects.some(item=>item.id===book.id);
    if(flag) return;//->如果存在了则return;如果不存在,就走下面的;
    state.collects.push(book);
    localStorage.setItem("c",JSON.stringify(state.collects));
  },
  [Types.REMOVE_COLLECT](state, book){//-> 删除;

  }
}

