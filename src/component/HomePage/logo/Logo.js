import React, { useEffect, useState } from "react";
import "./Logo.scss";
function Logo(props) {
  const [scrollY, setScrollY] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  return (
    <div className={`slider__logo ${scrollY > 0 ? "dp_fix" : ""}`}>
      <img
        className="slider__logo-img"
        src="https://hellodulich.com/wp-content/uploads/2021/06/logo-hello-du-lich-1.png"
      />
    </div>
  );
}

export default Logo;
