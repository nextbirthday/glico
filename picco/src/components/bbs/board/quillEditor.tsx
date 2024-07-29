import { useMemo } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const QuillEditor = ({ handleContent, quillRef }: any) => {
  const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'align', 'color', 'background', 'size', 'h1']

  const modules = useMemo(
    () => ({
      toolbar: {
        // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }, { color: [] }, { align: [] }, { background: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          ['clean'],
        ],
      },
    }),
    []
  )

  return (
    <ReactQuill
      theme="snow"
      placeholder="본문 입력"
      style={{ height: '90%', width: '100%' }}
      modules={modules}
      formats={formats}
      onChange={(content, delta, source, editor) => {
        handleContent(editor.getHTML())
      }}
    ></ReactQuill>
  )
}

export default QuillEditor
