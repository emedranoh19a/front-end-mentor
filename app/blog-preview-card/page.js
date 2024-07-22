// Learning
// Published 21 Dec 2023
// HTML & CSS foundations
// These languages are the backbone of every website, defining structure, content, and presentation.
// Greg Hooper

import clsx from "clsx";
import Image from "next/image";

function Page() {
  const cardStyles = clsx(
    "bg-white relative flex flex-col gap-2 h-fit w-80 p-4",
    "border border-black rounded-xl",
    "drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]" //TODO we may have to add this drop shadow manually each time we work with tailwind
  );

  return (
    <div className="bg-amber-300 h-screen w-screen flex  items-center justify-center">
      <div className={cardStyles}>
        <div className="w-full h-40 relative rounded-xl overflow-hidden">
          <Image
            fill
            objectFit="cover"
            src="/blog-preview-card/images/illustration-article.svg"
            alt=""
          />
        </div>
        <span className="bg-amber-300 inline w-fit px-3 py-1 text-sm rounded-lg mt-2 font-bold">
          Learning
        </span>
        <p className="text-sm font-light text-gray-800">
          Published 21 Dec 2023
        </p>
        <h3 className="text-lg font-bold hover:text-amber-300 hover:cursor-pointer transition-all">
          HTML & CSS foundations
        </h3>
        <p className=" text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center justify-start gap-3">
          <div class="relative w-10 h-10">
            <Image
              src="/blog-preview-card/images/image-avatar.webp"
              fill
              objectFit="cover"
              alt=""
            />{" "}
          </div>
          <div className="text-sm font-bold">Greg Hooper</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
