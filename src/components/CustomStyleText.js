import React,{useState} from 'react'


const CustomStyleText = () => {
    const [open, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen(!open)} className="rdw-block-wrapper" aria-label="rdw-block-control" role="button" tabIndex={0}>
        <div className="rdw-dropdown-wrapper rdw-block-dropdown" aria-label="rdw-dropdown" style={{width: 100}}>
          <div className="rdw-dropdown-selectedtext">
            <span>Style Text</span>
            <div className={`rdw-dropdown-caretto${open ? 'close' : 'open'}`} />
          </div>
         </div>
      </div>
  
        
    )
}



export default CustomStyleText
