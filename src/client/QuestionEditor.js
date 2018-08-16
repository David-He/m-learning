import React, {Component} from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class QuestionEditor extends Component{
    constructor(props) {
        super(props);
        //this.state = { editorState: EditorState.createEmpty()};
      }
    
    
    
    render(){
        return(
            <Editor>
            </Editor>
        ); 
    }
}

module.exports = QuestionEditor;