import { useEffect, useState } from "react";
import type { CountUpProps } from "../../type/data_type";


const CountUp = ({ value, duration = 1200, lang }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / value), 16);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, lang]);

  return <>{count}</>;
};

export default CountUp;
