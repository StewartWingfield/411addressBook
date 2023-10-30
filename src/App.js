import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddressCard from "./AddressCard";

function App() {
  const [addresses, setAddresses] = useState([]);

  const fetchAddress = () => {
    axios.get("https://randomuser.me/api?results=25").then((res) => {
      /* console.log(res.data.results); */
      setAddresses(res.data.results);
    });
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  console.log(addresses);
  return (
    <div className="App">
      <header className="App-header">
        {addresses.map((address) => (
          <AddressCard key={address.login.uuid} address={address} />
        ))}
      </header>
    </div>
  );
}

export default App;
