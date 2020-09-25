import { useState } from "react";

export default (initialValue) => {
  const [activeIndex, setActiveIndex] = useState(initialValue);

  return {
    activeIndex,
    onChange: (index) => {
      setActiveIndex(index);
    },
  };
};
