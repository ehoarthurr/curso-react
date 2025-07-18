// components
import FirstComponent from "./components/FirstComponent";

// styles /css
import "./App.css";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  );
}

export default App;
