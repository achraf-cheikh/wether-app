import { useState } from "react";
import { curr_Api_Key, curr_Api_weth } from "./Api";
import "./App.css";
import CurrentWether from "./components/CurrentWether";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentwhether, setCurrentwhether] = useState(null);
  const [forcast, setForcast] = useState(null);

  const SearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWetherFetch = fetch(
      `${curr_Api_weth}/weather?lat=${lat}&lon=${lon}&appid=${curr_Api_Key}&&units=metric`
    );

    const ForcastFetch = fetch(
      `${curr_Api_weth}/forecast?lat=${lat}&lon=${lon}&appid=${curr_Api_Key}&&units=metric`
    );
    Promise.all([currentWetherFetch, ForcastFetch])
      .then(async (response) => {
        const wetherresponse = await response[0].json();
        const forcastresponse = await response[1].json();

        setCurrentwhether({ city: searchData.label, ...wetherresponse });
        setForcast({ city: searchData.label, ...forcastresponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Search SearchChange={SearchChange} />
      {currentwhether && <CurrentWether data={currentwhether} />}
    </div>
  );
}

export default App;
