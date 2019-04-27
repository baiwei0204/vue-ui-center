const getData = () =>{
    return
}
const getOtherData = () =>{

}
export default {
    async actionA ({ dispatch, commit }) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getData())
      },
    async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
      }
}