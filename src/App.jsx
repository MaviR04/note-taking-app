import Header from './components/header'
import './App.css'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { useState } from 'react'

function App() {
  const [editor] = useState(() => withReact(createEditor()))
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'Jot something down!' }],
    },
  ]
  return (
    <>
      <Header />
      <div>
      <Slate editor={editor} initialValue={initialValue} className=' focus-within:border-0'>
        <Editable className=' font-inter bg-slate-50 border-0 text-black text-xl font-semibold h-fit text-wrap'/>
      </Slate>
      </div>
    </>
  )
}

export default App
