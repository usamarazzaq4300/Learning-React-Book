import HelloWorld from "./HelloWorld";
import NameCells from "./Fragments"
import pic from "./assets/agent1.png"
import {Props} from "./props"
import World from "./World"
import State from "./states"
function App() {
  return (
    <div className="App">
      {/* <HelloWorld/> 
      <World color="red"/>
      <NameCells/>
      <Props firstName="Usama " secondName="Razzaq"/>
      <img src={pic} alt="pic"/> */}
      <State/>
    </div>
  );
}

export default App;
