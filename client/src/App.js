import Home from "./containers/Home";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Home></Home>
      <Modal visible={showModal} />
    </>
  );
}
export default App;
