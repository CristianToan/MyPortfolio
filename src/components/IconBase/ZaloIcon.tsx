import { useId, type SVGProps } from "react";

const ZaloIcon = (props: SVGProps<SVGSVGElement>) => {
  const rawId = useId();
  const gradientId = rawId.replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="32"
        fontSize="50"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        fill={`url(#${gradientId})`}
      >
        Zalo
      </text>

      <defs>
        <linearGradient
          id={gradientId}
          x1="20"
          y1="20"
          x2="0"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#077036" />
          <stop offset="0.505208" stopColor="#054812" />
          <stop offset="1" stopColor="#0A9C3A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ZaloIcon;