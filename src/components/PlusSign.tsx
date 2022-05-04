import { FC } from "react";
import { CSSProperties } from "styled-components";

const PlusSign: FC<PlusSignProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 52 52"
    >
      <path
        fill={color}
        stroke={color}
        d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z"
      />
    </svg>
  );
};

export default PlusSign;

type PlusSignProps = {
  color?: CSSProperties["color"];
};
