import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const TextEditor = (props) => {
  const editor = useRef(null);

  const config = {
    askBeforePasteFromWord: false,
    askBeforePasteFromHTML: false,
    height: 500,
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  return useMemo(
    () => (
      <JoditEditor
        ref={editor}
        value={props.bookContents}
        config={config}
        onChange={(content) => props.setBookContents(content)}
        tabIndex={1} // tabIndex of textarea
        // }} // preferred to use only this option to update the content for performance reasons
      />
    ),
    []
  );
};

export default TextEditor;
