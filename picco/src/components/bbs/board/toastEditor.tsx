// Toast 에디터
import React from 'react'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'

interface Props {
  content: string
  editorRef: React.MutableRefObject<any>
}
const ToastEditor = ({ content = '', editorRef }: Props) => {
  // const handleSave = () => {
  //   let markDownContent = toastRef.current.getInstance().getMarkdown()
  //   let htmlContent = toastRef.current.getInstance().getHTML()
  // }
  const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['link', 'image'], ['scrollSync']]

  const editorProps = {
    ref: editorRef,
    previewStyle: 'vertical',
    initialValue: content || ' ',
    initialEditType: 'markdown',
    theme: '',
    height: '100%',
    hideModeSwitch: true,
    usageStatistics: false,
    toolbarItems: toolbarItems,
    plugins: [colorSyntax],
  }

  return <Editor {...editorProps} />
}

export default ToastEditor
