import { createStore } from "redux"
import LearningReducer from "./learningReducer"

const LearningStore = createStore(LearningReducer);

export default LearningStore;


