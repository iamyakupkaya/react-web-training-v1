import React, { useEffect, useState } from "react";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import mycv from "../assets/pdf/cv.pdf";
import { motion } from "framer-motion";

const CV = () => {
  const [colorIcon, setColorIcon] = useState("red");

  useEffect(() => {
    const timerColor = setTimeout(() => {
      setColorIcon("hsl(0, 0%, 81%)");
    }, 1000);

    return () => {
      clearTimeout(timerColor);
    };
  }, []);

  return (
    <div className="cv-btn-container">
      {console.log("render içindeyiz", colorIcon)}
      <a type="pdf" href={mycv} dowload="YAKUP-KAYA-CV">
        <motion.button
          animate={{
            scale: [2, 0.5, 1],
            rotate: [0, 720],
          }}
          transition={{ duration: 1 }}
          onMouseEnter={() => setColorIcon("red")}
          onMouseLeave={() => setColorIcon("hsl(0, 0%, 81%)")}
        >
          <RiDownloadCloud2Fill
            color={colorIcon}
            id="cv-download-icon"
            size="1.1rem"
          />
          <div style={{ color: colorIcon }}>CV</div>
        </motion.button>
      </a>
    </div>
  );
};

export default CV;
