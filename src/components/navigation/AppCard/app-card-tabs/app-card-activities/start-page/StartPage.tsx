import axios from "axios";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ImageService from "../../../../../../api-service/imageService/ImageService";
import ImageModel from "../../../../../../models/image/ImageModel";

const StartPage = () => {
  const [image, setImage] = useState(null);
  const inputTargetId = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputTargetType = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const upLoadImage = (e: any) => {
    e.preventDefault();
    const bodyFormData = new FormData(e.target);
    ImageService.addImage(bodyFormData).catch((ex) => console.log(ex));
  };

  const loadImage = () => {
    ImageService.getImage(inputTargetId.current.value, inputTargetType.current.value).then((res) =>
      setImage(res.data as any)
    );
  };

  useEffect(() => {}, [image]);

  return (
    <div>
      <div>WELCOME TO APP</div>
      <div>
        <form onSubmit={upLoadImage}>
          <div>
            <input type="file" name="imageData" />
            <input type="hidden" name="targetId" value={1} />
            <input type="hidden" name="targetType" value={6} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <input ref={inputTargetId} type="number" />
          <input ref={inputTargetType} type="number" />
          <button onClick={loadImage}>Load image</button>
        </div>
        <div>
          {image ? <img alt="not found" style={{ width: 100, height: 100 }} src={image} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
