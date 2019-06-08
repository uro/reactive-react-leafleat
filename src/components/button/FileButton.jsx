import React from 'react';

import './button.css';

const FileButton = ({name, action}) => {
  const file = React.createRef();

  return (
    <div style={{textAlign: 'center'}}>
      <input id={name} type='file' hidden ref={file} onChange={(event) => action(event)}/>
      <button className="btn btn-import" onClick={() => file.current.click()}>{name}</button>
    </div>
  );
};

export default FileButton;



