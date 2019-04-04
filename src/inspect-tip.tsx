import React, { SFC } from "react";
import { cx, css } from "emotion";

interface IProps {
  text: string | any[];
  data: any;
  className?: string;
  disabled?: boolean;
}

let renderText = (xs: any[]) => {
  return xs
    .map((x) => {
      if (typeof x === "string") {
        return x;
      }

      if (x == null) {
        return "\n";
      }

      return JSON.stringify(x);
    })
    .join(" ");
};

let InspectTip: SFC<IProps> = (props) => {
  if (props.disabled) {
    return null;
  }
  return (
    <div
      className={cx(styleContainer, props.className)}
      onClick={() => {
        let dataString = JSON.stringify(props.data);
        if (dataString.length < 40) {
          console.log(dataString);
        } else {
          console.info(props.data);
        }
      }}
    >
      {typeof props.text === "string" ? props.text : renderText(props.text)}
    </div>
  );
};

export default InspectTip;

let styleContainer = css`
  position: absolute;
  bottom: 80px;
  left: 0px;
  background-color: hsla(0, 0%, 0%, 0.5);
  padding: 4px 8px;
  color: white;
  font-family: Source Code Pro, Menlo;
  word-break: break-all;
  word-wrap: break-word;
  font-size: 10px;
  line-height: 1.6em;
  white-space: pre-line;
`;
