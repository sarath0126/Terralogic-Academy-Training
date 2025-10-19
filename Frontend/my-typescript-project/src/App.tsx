import Button from "./Button";
import "./App.css";
import Cards from "./Cards";
import MyClassComponent from "./MyClassComponent";
import First from "./First";

function App() {
  return (
    <div className="App">
      {/* <Button name="Button 1" />
      <Button name="Button2" />
      <Button name="Button3" />
      <Button name="Button4" /> */}

      {/* Cards Components */}
      <Cards name="Sarath" age={21} location="India" />
      <Cards name="Jhon" age={24} location="U.S.A" />
      <Cards name="Lee" age={25} location="China" />

      <MyClassComponent/>

    </div>
  );
}

export default App;