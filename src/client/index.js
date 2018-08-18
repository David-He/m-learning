import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import QuestionEditor from './QuestionEditor';
import ClientApp from './main';
import { Provider } from "react-redux";
import LearningStore from "./reducer/learningStore";

//ReactDOM.render(<QuestionEditor />, document.getElementById('root'));

ReactDOM.render( 
    <Provider store={LearningStore}>
        <ClientApp />
    </Provider>, 
    document.getElementById('root'));
