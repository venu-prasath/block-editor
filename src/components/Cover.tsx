import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import React from "react";

interface CoverProps {
  url?: string;
  setUrl: (_: string) => void;
}

const Cover: React.FC<CoverProps> = ({ url, setUrl }) => {
  return (
    <div
      className={`relative w-full h-[35vh] bg-neutral-300 ${
        !url ? "hidden" : ""
      }`}
    >
      {!!url && (
        <>
          <Image
            src={url}
            alt="cover"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute w-[20%] h-[20%] right-0 bottom-0 group flex justify-center items-center">
            <UploadButton
              className="opacity-0 group-hover:opacity-100 transition-opacity w-fit ut-allowed-content:hidden ut-button:bg-neutral-200 ut-button:hover:bg-neutral-300 ut-button:text-neutral-800 ut:button:transition-colors "
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setUrl(res[0].url);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cover;
