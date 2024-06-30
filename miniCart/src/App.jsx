import { useState } from "react";

const India = ["Gujarat", "Delhi", "Mumbai"];
const USA = ["New York", "New Jersey"];

function App() {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  function handleCountryChange(e) {
    const selected = e.target.value;
    setSelectedCountry(selected);

    if (selected === "India") {
      setCountry(India);
    } else if (selected === "USA") {
      setCountry(USA);
    } else {
      setCountry([]);
    }
  }

  return (
    <>
      <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        <select>
          {country.map((data, index) => (
            <option key={index} value={data}>{data}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;

