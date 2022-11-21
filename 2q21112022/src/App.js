import "./App.css";
import { Header } from "./components/headerComp/Header";
import { Comp1,Comp2,Comp3 } from "./components/main";
export const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <ul className="list-style">
          <li class="list-item-container">
            <Comp1 />
          </li>
          <li class="list-item-container">
          <Comp2 />
          </li>
          <li class="list-item-container">
          <Comp3 />
          </li>
        </ul>
    </div>
  );
};
