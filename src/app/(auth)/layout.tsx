import { LineIcon } from "@/components/icons";
import { Clock10 } from "lucide-react";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex justify-center items-center">
        <LineIcon width={300} height={300} />
        {/* <img src={"/logo.svg"} className="w-full h-full p-60" /> */}
      </div>
      {children}
    </div>
  );
};

export default layout;
