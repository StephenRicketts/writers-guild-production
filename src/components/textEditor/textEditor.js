import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class TextEditor extends React.Component {
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
        apiKey="kdf5o2lrey8tvua40h7pk2qrxrfe2j8qk7wp0td1d2w76all"
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

export default TextEditor;
