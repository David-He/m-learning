import constants from "./constants";

const actionCreator = {
    switchView(value){
        return{
            type: constants.SwitchView,
            value: value,
        } 
    },

    examinClick(value){
        return{
            type: constants.ExaminClick,
            value: value,
        }
    },

    examinClose(){
        return{
            type: constants.ExaminClose
        }
    }
}

export default actionCreator;