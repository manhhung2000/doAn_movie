import React, { memo } from 'react'

function Child() {
    console.log("Child re-render");
    return (
        <div>
            <h1>Child</h1>
        </div>
    )
}

// Child chỉ chạy lại khi props và state của component Child thay đổi
export default memo(Child);
