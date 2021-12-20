import Context from "./Context";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Context>
      <Home />
      <Sidebar />
      <Modal />
    </Context>
  );
}

export default App;
