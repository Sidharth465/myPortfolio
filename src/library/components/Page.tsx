import { ReactNode } from "react";

const Page = ({
  children,
  className = "min-h-screen flex items-center justify-center",
  showTopDivider = true,
  showBottomDivider = true,
}: {
  children?: ReactNode;
  className?: string;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
}) => {
  return (
    <div className="relative">
      {/* SVG shape at the top */}
      {showTopDivider && (
        <div className="custom-shape-divider-top-1746114234">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      )}

      {/* Page content */}
      <div className={`relative z-10 ${className}`}>{children}</div>

      {/* SVG shape at the bottom */}
      {showBottomDivider && (
        <div className="custom-shape-divider-bottom-1746114352">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Page;
