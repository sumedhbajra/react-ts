import { useState } from "react";
import "./App.css";
import Person from "./Person";
import { UserProvider, Countries } from "./UserContextProvider";

function App() {
  const [isShowInfo, setShowInfo] = useState<boolean | null>(false);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <>
      <UserProvider>
        <button onClick={toggleInfo}>Show Info</button>
        {isShowInfo && (
          <>
            <Person
              name="Sumedh"
              age={21}
              isMarried={false}
              country={Countries.Germany}
            />
            <Person
              name="Sufal"
              age={25}
              isMarried={false}
              country={Countries.France}
            />
            <Person
              name="Rojesh"
              age={26}
              isMarried={true}
              country={Countries.Brazil}
            />
          </>
        )}
      </UserProvider>
    </>
  );
}

export default App;
