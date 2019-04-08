import React, { SFC, CSSProperties } from "react";
import { cx, css } from "emotion";

interface IProps {
  text: string | any[];
  data: any;
  className?: string;
  style?: CSSProperties;
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
      style={props.style}
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
  bottom: 8px;
  left: 8px;
  background-color: hsla(0, 0%, 0%, 0.6);
  padding: 4px;
  color: white;
  font-family: Roboto Mono, Menlo, monospace;
  word-break: break-all;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 1.6em;
  white-space: pre-line;
  cursor: pointer;
  transition-duration: 240ms;
  opacity: 0.3;
  white-space: pre;

  &:hover {
    opacity: 1;
  }
`;
