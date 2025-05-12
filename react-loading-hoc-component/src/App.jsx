import React, { useState } from "react";
import LoadingLogic from "./components/LoadingLogic";
import LoadingUI from "./components/LoadingUI";

const LoadingLogicUI = LoadingLogic(LoadingUI);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const users = ["Poojan", " Mastur", "Pawan Sir"];

  return (
    <div>
      <LoadingLogicUI isLoading={isLoading} users={users} />
    </div>
  );
};

export default App;
