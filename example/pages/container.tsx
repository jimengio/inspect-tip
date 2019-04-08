import React from "react";
import { css } from "emotion";
import InspectTip from "inspect-tip";

export default (props) => {
  return (
    <div className={styleContainer}>
      <div className={styleTitle}>Demo of inspect-tip, open Console and click the tips</div>

      <InspectTip text="debug text" data={{ data: "demo data" }} className={styleTip} />
      <InspectTip text={["Chunks", null, "of", null, "data"]} data={{ data: "demo " }} className={styleChunksTip} />
    </div>
  );
};

const styleContainer = css`
  font-family: "Helvetica";
`;

const styleTitle = css`
  margin-bottom: 16px;
`;

let styleTip = css``;

let styleChunksTip = css`
  left: 200px;
`;
