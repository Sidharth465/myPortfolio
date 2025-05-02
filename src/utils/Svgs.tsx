// components/Icons.tsx
export const MenuIcon = ({ size = 24, color = "white" }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const CloseIcon = ({ size = 24, color = "white" }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Svgs = () => {
  return <></>;
};

export default Svgs;
