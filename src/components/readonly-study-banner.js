import React from 'react'

export default function ReadOnlyStudyBanner({ children }) {
    return (
        <div style={{ 
            backgroundColor: '#13a9f1', 
            color: 'white', 
            padding: '12px', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center',
            marginBottom: '12px'
        }}>
            <div>
                <div style={{ 
                    borderRadius: '50%', 
                    height: '30px', 
                    width: '30px', 
                    border: '2px solid white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}>
                    <span style={{ color: 'white', fontSize: '22px', fontWeight: 'bold' }}>!</span>
                </div>
            </div>
            <div style={{ padding: '0 16px' }}>
                <h2 style={{ fontWeight: 'normal' }}>This study is owned by <b>neurosynth</b> and is <b>read-only</b></h2>
                <p style={{ marginBottom: 0 }}>
                    If you would like to make your own edits, then you need to <b>clone</b> the study.
                    <br />
                    Once you clone, your studyset will contain the new study instead of the current one owned by <b>neurosynth</b>
                    <br />
                    You do not need to clone a study to update annotations.
                </p>
            </div>
            <div>
                <button style={{ 
                    cursor: 'pointer',
                    backgroundColor: '#ee8a34',
                    border: '1px solid transparent', 
                    color: 'white', 
                    padding: '10px', 
                    borderRadius: '4px', 
                    whiteSpace: 'nowrap',
                }}>CLONE AND EDIT</button>
            </div>
       </div>
    )
}
