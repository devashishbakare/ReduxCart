import Navbar from "./ Component/Navbar";
import Cart from "./ Component/Cart";
import cartData from "./CartData";
import { createStore } from "redux";
import { Reducer } from "./ Component/Reducer";

import { Provider } from "react-redux";
function App() {
  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <div className="h-[8vh] min-h-[72px] w-[100vw]">
          <Navbar />
        </div>
        <div className="h-[90vh] min-h-[790px] w-[100vw] mt-1">
          <Cart />
        </div>
      </Provider>
    </>
  );
}

export default App;
