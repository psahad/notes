import React from 'react';
import ReactMarkdown from 'react-markdown'

const Main = ({activeNote, onUpdateNote}) => {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()

        })
    };

    if(!activeNote){
        return <h1 className='no-active-note'>No Note Selected</h1>
    }

    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input type='text' id='title' value={activeNote.title} onChange={(e) => onEditField('title', e.target.value)}  autoFocus />
                <textarea id='body' value={activeNote.body} onChange={(e) => onEditField('body', e.target.value)} placeholder='Write your note here...' />
            </div>
            <div className='app-main-note-preview'>
                <h1 className='preview-title'>{activeNote.title}</h1>
                <ReactMarkdown className='markdown-preview'>{activeNote.body}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Main;