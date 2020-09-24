import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class TextEditorREBUILD extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    this.props.setBookContents(content);
  };

  render() {
    return (
      <Editor
        initialValue={this.props.bookContents}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default TextEditorREBUILD;
