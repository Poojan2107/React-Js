import React, { useState } from 'react'

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? (
        <button onClick={() => setIsLogin(!isLogin)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(!isLogin)}>Login</button>
      )}

      
    </div>
  );
}

export default App