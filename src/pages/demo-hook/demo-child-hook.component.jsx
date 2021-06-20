import React, { useEffect } from 'react'

function ChildHook() {

    useEffect(() => {
        return () => {
            // componentWillUnmount
            console.log("useEffect có trả về function");
            // clear những cái setTimeOut, setInterval, ...

        }
    })

    return (
        <div>
            <h1>ChildHook</h1>
        </div>
    )
}

export default ChildHook
