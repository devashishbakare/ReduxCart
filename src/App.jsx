import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import cartData from "./CartData";

function App() {
  return (
    <>
      <div className="h-[8vh] min-h-[72px] w-[100vw]">
        <Navbar />
      </div>
      <div className="h-[90vh] min-h-[790px] w-[100vw] mt-1">
        <Cart cartData={cartData} />
      </div>
    </>
  );
}

export default App;
