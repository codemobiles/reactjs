import React from 'react'

export  function Counter(props) {
    return (
        <div style={{backgroundColor: 'white'}}>
            <h1>Counter</h1>
            <h2>{props.count}</h2>
        </div>
    )
}
