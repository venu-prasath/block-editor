"use client";

import TextareaAutosize from "react-textarea-autosize";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Cover from "@/components/Cover";

export default function Home() {
  const [coverUrl, setCoverUrl] = useState<string>();

  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), { ssr: false }),
    []
  );

  const enableCover = async () => {
    const randomImage = await fetch("https://picsum.photos/800/300");
    setCoverUrl(randomImage.url);
  };

  return (
    <main className="min-h-screen">
      <Cover url={coverUrl} setUrl={setCoverUrl} />
      <div className="flex flex-col px-24 py-10 w-full">
        <div className="group flex flex-col gap-2">
          {!coverUrl && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={enableCover}
                className="hover:bg-neutral-100 text-neutral-400 rounded-md px-3 py-1 transition-colors"
              >
                📸 Add Cover
              </button>
            </div>
          )}
          <TextareaAutosize
            className="w-full resize-none bg-transparent text-5xl font-bold focus:outline-none"
            placeholder="Untitled"
          />
        </div>
        <Editor onChange={() => {}} />
      </div>
    </main>
  );
}
