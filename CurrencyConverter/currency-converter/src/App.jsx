import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [currency, setCurrency] = useState("INR");

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl bg-orange-500 ">Currency App</h1>
      <InputBox
        label={"From"}
        amount={0}
        currencyOptions={options.rates}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setCurrency(currency)}
      />

      <InputBox
        label={"To"}
        amount={0}
        currencyOptions={options.rates}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setCurrency(currency)}
      />
    </div>
  );
}

export default App;
