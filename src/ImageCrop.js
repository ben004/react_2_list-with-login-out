import React from "react";
import AvatarEditor from "react-avatar-editor";

const ImageCrop = ({
  imageSrc,
  onCrop,
  setEditorRef,
  scaleValue,
  onScaleChange,
}) => (
  <div>
    <AvatarEditor
      image={imageSrc}
      border={50}
      scale={scaleValue}
      rotate={0}
      ref={setEditorRef}
      className="cropCanvas"
    />
    <input
      style={{ width: "100%" }}
      type="range"
      value={scaleValue}
      name="points"
      min="1"
      max="10"
      onChange={onScaleChange}
    />
    <button onClick={onCrop} className="editorOverlayCloseBtn crpBtn">
      upload
    </button>
  </div>
);

export default ImageCrop;
