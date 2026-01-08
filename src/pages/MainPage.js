import ParkingMap from "./section/main/ParkingMap";
import { useState,useEffect,useLayoutEffect,useRef } from "react";
import Popup from "../components/common/Popup";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [view, setView] = useState("list"); 
  const [selected, setSelected] = useState(null);
  const mainSlotRef = useRef(null);
const popupTopCenterRef = useRef(null);

const [rect, setRect] = useState({ top: 0, left: 0, width: 200, height: 44 });

const measure = () => {
  const el = open ? popupTopCenterRef.current : mainSlotRef.current;
  if (!el) return;
  const r = el.getBoundingClientRect();
  setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
};



const openPopup = () => {
  setOpen(true);
  setView("list");
  setSelected(null);
};

const closePopup = () => {
  setOpen(false);
  setView("list");
    setSelected(null);
  };

  useLayoutEffect(() => { measure(); }, [open]);
  useEffect(() => { if (open) setTimeout(measure, 0); }, [open]);
  
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);
  return (
    <div className="mainpage">
      <ParkingMap />
      <div className="main-slot" ref={mainSlotRef} />
      <div className="search" style={{ top: rect.top, left: rect.left, width: rect.width }} >
        <input
          type="text"
          placeholder="주차장을 찾아보세요"
          value={keyword}
          onClick={openPopup}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
        if (e.key === "Enter") openPopup();
      }}
        />

      </div>
        <Popup 
        open={open}
        onClose={closePopup}
        keyword={keyword}
        setKeyword={setKeyword}
        view={view}
        selected={selected}
        popupTopCenterRef={popupTopCenterRef}
        onSelectItem={(item) => {
          setSelected(item);
          setView("detail");
          }}
        onBack={() => setView("list")}
        />
    </div>
  );
};

export default MainPage;
