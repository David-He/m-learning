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
    },

    learningClick(value){
        return{
            type: constants.LearningClick,
            value: value
        }
    },

    learningClose(){
        return{
            type: constants.LearningClose
        }
    }


}

export default actionCreator;