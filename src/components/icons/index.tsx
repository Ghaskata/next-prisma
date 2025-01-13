import { SVGProps } from "react";

export const LineIcon = ({
  width = 40,
  height = 40,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      data-size="large"
      fill="none"
      viewBox="0 0 117 152"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152"
        stroke="url(#paint0_linear_1364_100888)"
        strokeWidth={2}
      />
      <path
        d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152"
        stroke="url(#paint1_linear_1364_100888)"
        strokeWidth={2}
      />
      <g clipPath="url(#clip0_1364_100888)">
        <path
          clipRule="evenodd"
          d="M4 0.5L8 7.5H0L4 0.5Z"
          fill="#45DEC4"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1364_100888"
          x1={116}
          x2={4}
          y1={72}
          y2={72}
        >
          <stop stopColor="#E5484D" />
          <stop offset="0.5" stopColor="#FFC634" />
          <stop offset={1} stopColor="#45DEC4" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1364_100888"
          x1={116}
          x2={116}
          y1={152}
          y2="1.56712e-05"
        >
          <stop stopColor="var(--ds-background-200)" />
          <stop
            offset="0.322368"
            stopColor="var(--ds-background-200)"
            stopOpacity={0}
          />
        </linearGradient>
        <clipPath id="clip0_1364_100888">
          <rect fill="white" height={8} width={8} />
        </clipPath>
      </defs>
    </svg>
  );
};
