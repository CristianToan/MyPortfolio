import { useId, type SVGProps } from "react";

const MailIcon = (props: SVGProps<SVGSVGElement>) => {
  const rawId = useId();
  const gradientId = rawId.replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 27 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 3.375C26 2.06875 24.875 1 23.5 1H3.5C2.125 1 1 2.06875 1 3.375M26 3.375V17.625C26 18.9313 24.875 20 23.5 20H3.5C2.125 20 1 18.9313 1 17.625V3.375M26 3.375L13.5 11.6875L1 3.375"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id={gradientId}
          x1="24.8971"
          y1="18.8824"
          x2="0.978445"
          y2="3.94873"
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

export default MailIcon;