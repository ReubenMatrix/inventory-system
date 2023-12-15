import Details from "../components/Details";
import Navbar from "../components/Navbar";
import '../global.css'
import { useNavigate } from "react-router-dom";


const Inventory = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/additem");
  };

  return (
    <main className="relative bg-lightcyan  w-full h-[1024px] overflow-hidden text-left text-sm text-black font-inter">
      <Navbar />
      <section className="absolute top-[180px] left-[144px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[1151px] h-[100px] overflow-hidden text-left text-mini text-black font-inter">

        <Details />
      </section>

      <div className="absolute top-[303px] left-[calc(50%_-_239px)] w-[478px] h-[470px] overflow-hidden opacity-[0.3]">
        <img
          className="absolute h-[12.5%] w-[12.5%] top-[75%] right-[59.38%] bottom-[12.5%] left-[28.13%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
          style={{ filter: 'grayscale(100%)' }}
        />
        <img
          className="absolute h-[12.5%] w-[12.5%] top-[75%] right-[15.63%] bottom-[12.5%] left-[71.88%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
          style={{ filter: 'grayscale(100%)' }}
        />
        <img
          className="absolute h-[59.38%] w-[84.04%] top-[12.5%] right-[9.71%] bottom-[28.13%] left-[6.25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div className="absolute h-[19.15%] w-[66.95%] top-[100%] right-[5.02%] bottom-[-19.15%] left-[28.03%] bg-red overflow-hidden" />
      </div>
      <b className="absolute top-[726px] left-[calc(50%_-_264px)] text-[30px] text-gray-500 opacity-[0.6]">
        You have no items in your inventory.
      </b>

      <button
        className="absolute bottom-[20px] left-[50%] transform translate-x-[-50%] rounded-8xs bg-dodgerblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[218px] h-14 overflow-hidden text-xl text-white"
        onClick={handleButtonClick}>
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[46px] h-14" />
        <b className="absolute top-[16px] left-[65px]">Add New Item</b>
        <img
          className="absolute top-[10px] left-[5px] w-[38px] h-[38px]"
          alt=""
          src="/group-17.svg"
        />
      </button>
    </main>
  );
};

export default Inventory;
