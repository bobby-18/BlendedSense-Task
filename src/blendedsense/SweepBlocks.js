import React,{useState} from 'react'
import { Link, Outlet } from "react-router-dom";


function SweepBlocks() {
   const [selectedDiv, setSelectedDiv] = useState("");
  return (
    <div >
      <h3 className="sweeph3">Sweep Blocks</h3>
      <ul className="sweeps">
        <li>
          <Link
            to="/Dashboard/SweepBlocks"
            className={`links-divs ${
              selectedDiv === "div1" ? " selected" : undefined
            }`}
            onClick={() => setSelectedDiv("div1")}
          >
            Sweep Blocks
          </Link>
        </li>
        <li>
          <Link
            to="/Dashboard/SweepBlocks/SweepDetails"
            className={`links-divs ${
              selectedDiv === "div2" ? " selected" : undefined
            }`}
            onClick={() => setSelectedDiv("div2")}
          >
            Sweep Blocks Details
          </Link>
        </li>
      
      </ul>

      <Outlet />
    </div>
  );
}

export default SweepBlocks
