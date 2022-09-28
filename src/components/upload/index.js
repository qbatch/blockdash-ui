import React, { useEffect, useState } from "react";
import { UploadWrapper } from "./style";
import Button from "../../components/button/button";
import Progresss from "../../components/progress/index";
import UploadIcon from '../../static/images/upload-icon.svg';

const Index = (props) => {
  const {loading,uploadFile}=props
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <UploadWrapper>
      <div className="input-type">
        <input onChange={uploadFile} type="file" />
        <div className="upload-file">
          <div className="d-flex align-items-center flex-column upload">
            <span><img src={UploadIcon} alt="upload icon"/></span>
            <span>Select a file or drag and drop here</span>
            <span>JPG, PNG or PDF file</span>
            <div className="divider">
              <span className="inner-text">OR</span>
            </div>
            <div className="text-center">
              <Button outlined >Upload File</Button>
            </div>
          </div>
          {loading &&
          <div style={{ width: 200, height: 200 }} >
            <Progresss percentage={progress} />
          </div>
}
        </div>
      </div>
    </UploadWrapper>
  );
};
export default Index;
