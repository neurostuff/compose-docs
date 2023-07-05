import React from 'react'

export default function OutOfSyncBanner({ children }) {
    return (
        <div style={{ 
            backgroundColor: '#ee8a34',
            color: 'white', 
            padding: '12px', 
            borderRadius: '4px', 
            marginBottom: '12px'
        }}>
            <div>
                <p>
                    <b>This studyset is out of sync with the curation phase. </b>
                    Either some studies specified as "included" within the curation phase are not in the studyset, or some studies within the studyset are not 
                    specified as "included" within the curation phase.
                </p>
            </div>
            <div>
                <button style={{ 
                    cursor: 'pointer',
                    backgroundColor: '#0a77b4',
                    border: '1px solid transparent', 
                    color: 'white', 
                    padding: '10px', 
                    borderRadius: '4px', 
                    whiteSpace: 'nowrap',
                }}>FIX THIS ISSUE</button>
            </div>
       </div>
    )
}
