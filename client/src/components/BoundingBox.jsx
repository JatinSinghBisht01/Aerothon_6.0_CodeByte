import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image, Rect, Text } from 'react-konva';
import useImage from 'use-image';
import PropTypes from 'prop-types';

const BoundingBox = ({ imageSrc, detections }) => {
  const [image] = useImage(imageSrc);
  const [stageSize, setStageSize] = useState({ width: 800, height: 400 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth < 800 ? window.innerWidth : 800;
      const height = (width / 800) * 400;
      setStageSize({ width, height });
    };

    window.addEventListener('resize', updateSize);
    updateSize(); 

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const scaleX = image ? stageSize.width / image.width : 1;
  const scaleY = image ? stageSize.height / image.height : 1;

  return (
    <Stage width={stageSize.width} height={stageSize.height}>
      <Layer>
        {image && (
          <Image
            image={image}
            scaleX={scaleX}
            scaleY={scaleY}
            width={image.width}
            height={image.height}
          />
        )}
        {detections.map((detection, index) => {
          const { x, y, width, height, class: className, confidence } = detection;

          const scaledX = x * scaleX;
          const scaledY = y * scaleY;
          const scaledWidth = width * scaleX;
          const scaledHeight = height * scaleY;
          const roundedConfidence = parseFloat(confidence).toFixed(2);

          return (
            <React.Fragment key={index}>
              <Rect
                x={scaledX - scaledWidth / 2}
                y={scaledY - scaledHeight / 2}
                width={scaledWidth}
                height={scaledHeight}
                stroke="red"
                strokeWidth={2}
              />
              <Text
                x={scaledX - scaledWidth / 2}
                y={scaledY - scaledHeight / 2}
                text={`${className} ${roundedConfidence}`}
                fontSize={30}
                fill="red"
                align="center"
                width={scaledWidth}
                padding={5}
                background="red"
              />
            </React.Fragment>
          );
        })}
      </Layer>
    </Stage>
  );
};

BoundingBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  detections: PropTypes.array.isRequired,
};

export default BoundingBox;
