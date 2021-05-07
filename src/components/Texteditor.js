import React,{useState} from 'react'
import { Editor,} from "react-draft-wysiwyg";
import { EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css';
import editorLabels from './labels'
import iconColor from '../utils/Writers Mode-Default Template/Icon-colour.svg'
import iconRight from '../utils/Writers Mode-Default Template/Icon feather-align-right.svg'
import iconLeft from '../utils/Writers Mode-Default Template/Icon-align-left.svg'
import iconCenter from '../utils/Writers Mode-Default Template/Icon-align-center.svg'
import iconJustify from '../utils/Writers Mode-Default Template/Icon-align-justify.svg'
import iconOrdered from '../utils/Writers Mode-Default Template/Icon-bullets.svg'
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CustomedQuote from './CustomedQuote';
import CustomStyleText from './CustomStyleText'


const Texteditor = (props) => {
   
    const [editor, seteditor] = useState(() => EditorState.createEmpty(),);

    return (
        <div className="editorContainer">
            
            <div >
            <Editor editorState={editor}
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={seteditor}
                localization={{ locale: 'en', translations: editorLabels }}
                toolbar={{
                    options: ['fontFamily','blockType', 'fontSize', 'colorPicker', 'textAlign' ,'list'],
                    textAlign: {
                        inDropdown: true,
                        right: { icon: iconRight,className:'demo-option-custom'},
                        justify: { icon: iconJustify,className:'demo-option-custom' },
                        center:{icon:iconCenter,className:'demo-option-custom'},
                        left:{icon:iconLeft,className:'demo-option-custom'},
                    },
                    list: {
                        inDropdown: true,
                        unordered: { icon: iconOrdered },
                        options:['ordered','unordered']
                        
                    },
                    fontFamily: {
                        options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Monsterrut', 'Verdana'],
                    },
                    blockType: {
                        options: ['Normal', 'H6', 'H4', 'H2', 'H1'],
                        
                    },
                    colorPicker: {
                        icon:iconColor,
                    },
                    }}
                    toolbarCustomButtons={[<CustomedQuote />,<CustomStyleText/>]}
                />
            </div>
            <div className="editor-right">
                <div className="save">SAVE</div>
                <div className="proof">SEND FOR PROOF</div>
                <div className="publish">PUBLISH</div>
            </div>
            </div>
           
        
    )
}

export default Texteditor
