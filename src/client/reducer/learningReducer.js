import constants from './constants'
import { combineReducers } from "redux";

const initialState ={
    activeView : 0,
    examin:{
        open: false,
        month: 0,
    }
}

const learningReducer = (state = initialState.activeView, action)=>{
    console.log(action);
    switch(action.type){
        case constants.SwitchView:
            return  action.value;
        
        default: 
            return state;
    }

}

const examinReducer = (state = initialState.examin, action)=>{
    console.log(action)
    switch(action.type){
        case constants.ExaminClick:
            return {
                open: true,
                month: action.value,
            };
        case constants.ExaminClose:
            return {
                open: false,
                month: 0,
            }
        default:
            return state;
    }
}

const Reducer = combineReducers({
    switchView: learningReducer,
    examin: examinReducer
});

export default Reducer;
