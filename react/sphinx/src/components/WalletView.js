import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Rect } from "react-konva";

const rectProps = {
  stageWidth: "200",
  stageHeight: "200",
  rectWidth: "50",
  rectHeight: "50",
  fill: "blue"
};  

export default function WalletView() {
  return (
    <Stage width={rectProps.stageWidth} height={rectProps.stageHeight}>
      <Layer>
        <Rect
          width={rectProps.rectWidth}
          height={rectProps.rectHeight}
          fill={rectProps.fill}
        //   draggable
        />
      </Layer>
    </Stage>
  );
}

WalletView.propTypes = {
  data: PropTypes.object.isRequired
};
