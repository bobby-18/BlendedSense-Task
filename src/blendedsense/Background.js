import React from "react";
import Bslogin from "../loginform/Bslogin";

function Background() {
  return (
    <div className="ovreallbackground">
      <div>
        <img
          src="https://stage.blendedsense.com/img/producer.a65db3cf.svg"
          alt="img1"
          className="img1"
        />
      </div>
      <div>
        <img
          src="https://stage.blendedsense.com/img/businessOwner.bedd058c.svg"
          alt="img2"
          className="img2"
        />
      </div>
      <div className="bsloginn">
        <Bslogin />
      </div>
      <div>
        <img
          src="https://stage.blendedsense.com/img/creative.cbaacd69.svg"
          alt="img3"
          className="img3"
        />
      </div>
      <div>
        <img
          src="https://stage.blendedsense.com/img/photoshootEquipment.c4da40ca.svg"
          alt="img4"
          className="img4"
        />
      </div>
      <div className="horizontal-line">
        <hr
          style={{
            background: "Gray",

            height: "2.8px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}

export default Background;
