import '../App.css'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { useState } from 'react'

function Editor(){

    const [editor] = useState(() => withReact(createEditor()))
    const initialValue = [
      {
        type: 'paragraph',
        children: [{ text: 'Jot something down!' }],
      },
    ]

    return(
        <div>
        <Slate editor={editor} initialValue={initialValue}>
        <Editable className=' font-inter bg-backdark-100 border-0 text-white text-xl font-light min-h-screen text-wrap p-6 '/>
        </Slate>
        </div>
    )
}

export default Editor