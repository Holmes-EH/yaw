import React, { useState } from 'react'
import { IContentBlock, Yaw } from './components'

function App() {
  const [blocks, setBlocks] = useState<IContentBlock[]>([
    {
      id: 'a-first-id-for-dummy-data',
      type: 'header',
      data: { level: 1, text: 'Welcome to YAW!' },
    },
    {
      id: 'a-second-id-for-dummy-data',
      type: 'paragraph',
      data: {
        text: 'You can start by editing the <b>2 existing blocks</b>, or delete them...\nAnd start adding your own...',
      },
    },
  ])
  return (
    <div style={{ padding: '0 5em' }}>
      <h1>Yaw Editor</h1>
      <Yaw
        className="yaw"
        blocks={blocks}
        setBlocks={setBlocks}
        toolBarIconSize="1.5em"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          outline: '1px solid white',
          borderRadius: '1em',
          padding: '1em 10px',
        }}
      />
    </div>
  )
}

export default App
