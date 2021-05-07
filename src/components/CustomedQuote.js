import React from 'react'
import PropTypes from 'prop-types';
import { EditorState, Modifier } from 'draft-js';
import iconQuote from '../utils/Writers Mode-Default Template/Icon-quote.svg'



const CustomedQuote = (props) => {
    const addQuote = () => {
        const { editorState, onChange } = props;
        const contentState = Modifier.replaceText(
          editorState.getCurrentContent(),
          editorState.getSelection(),
          ' ""',
          editorState.getCurrentInlineStyle(),
        );
        onChange(EditorState.push(editorState, contentState, 'insert-characters'));
      };
    return (
        <div className="quote" onClick={addQuote}>
            <img style={{height:'15px',width:'15px',marginTop:'8px'}} src={iconQuote} alt=""/> 
        </div>
    )
}
CustomedQuote.propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };

export default CustomedQuote;
