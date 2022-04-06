import React, { useState } from "react";
import { SiAboutdotme } from "react-icons/si";
import { FaLaptopCode, FaRegAddressCard } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { VscFolderActive } from "react-icons/vsc";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";

// we have react icon dependicies
//import CV from "../../assets/pdf/cv.pdf";
const iconSize = "1.6rem";

const Navigation = () => {
  const [iconColor, setColorIcon] = useState({
    home: "hsl(0, 0%, 81%)",
    about: "hsl(0, 0%, 81%)",
    education: "hsl(0, 0%, 81%)",
    experience: "hsl(0, 0%, 81%)",
    portfolio: "hsl(0, 0%, 81%)",
    certificate: "hsl(0, 0%, 81%)",
    contact: "hsl(0, 0%, 81%)",
  });

  const onMouseHandle = (page) => {
    setColorIcon({ ...iconColor, [page]: "red" });
  };

  const leaveMouseHandle = (page) => {
    setColorIcon({ ...iconColor, [page]: "hsl(0, 0%, 81%)" });
  };
  return (
    <nav className="navigation-container">
      <div id="nav-wrapper">
      <nav className="navigation-flex">
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("home")}
            onMouseLeave={() => leaveMouseHandle("home")}
          >
            <span className="navigation-button-icon">
              <TiHomeOutline size={iconSize} color={iconColor.home} />
            </span>
            <span
              style={{ color: iconColor.home }}
              className="navigation-button-text"
            >
              ANASAYFA
            </span>
          </button>
        </div>
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("about")}
            onMouseLeave={() => leaveMouseHandle("about")}
          >
            <span>
              <SiAboutdotme size={iconSize} color={iconColor.about} />
            </span>
            <span
              style={{ color: iconColor.about }}
              className="navigation-button-text"
            >
              HAKKINDA
            </span>
          </button>
        </div>
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("education")}
            onMouseLeave={() => leaveMouseHandle("education")}
          >
            <span>
              <MdCastForEducation size={iconSize} color={iconColor.education} />
            </span>{" "}
            <span
              style={{ color: iconColor.education }}
              className="navigation-button-text"
            >
              EĞİTİM
            </span>
          </button>
        </div>
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("experience")}
            onMouseLeave={() => leaveMouseHandle("experience")}
          >
            <span>
              <FaLaptopCode size={iconSize} color={iconColor.experience} />
            </span>
            <span
              style={{ color: iconColor.experience }}
              className="navigation-button-text"
            >
              TECRÜBE
            </span>
          </button>
        </div>
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("portfolio")}
            onMouseLeave={() => leaveMouseHandle("portfolio")}
          >
            <span>
              <VscFolderActive size={iconSize} color={iconColor.portfolio} />
            </span>
            <span
              style={{ color: iconColor.portfolio }}
              className="navigation-button-text"
            >
              PORTFOLTO
            </span>
          </button>
        </div>
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("certificate")}
            onMouseLeave={() => leaveMouseHandle("certificate")}
          >
            <span>
              <AiOutlineSafetyCertificate
                size={iconSize}
                color={iconColor.certificate}
              />
            </span>
            <span
              style={{ color: iconColor.certificate }}
              className="navigation-button-text"
            >
              SERTİFİKA
            </span>
          </button>
        </div>
        <div className="navigation-items">
          <button
            onMouseEnter={() => onMouseHandle("contact")}
            onMouseLeave={() => leaveMouseHandle("contact")}
          >
            <span>
              <FaRegAddressCard size={iconSize} color={iconColor.contact} />
            </span>
            <span
              style={{ color: iconColor.contact }}
              className="navigation-button-text"
            >
              İLETİŞİM
            </span>
          </button>
        </div>
      </nav>
      <hr data-symbol="DENEME"></hr>
    </div>
    </nav>
  );
};

export default Navigation;
