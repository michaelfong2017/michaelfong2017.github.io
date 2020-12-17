import React, { useState } from 'react';
function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}
export default App;