import clsx from "clsx"
import Image from "next/image"

//TODO: add the provided fonts.
export default function Page() {
    const mainGridCn = clsx("grid min-h-screen max-w-screen m-4 grid grid-cols-1 gap-4")

    //TODO: get rid of the ugly red
    return <div className={mainGridCn}>
        {/* Social media faster with AI */}
        <div className="w-full text-center h-full p-8 relative bg-indigo-500 rounded-lg text-neutral-50 flex flex-col justify-center items-center">
            <div className="text-4xl">
                Social Media <span className="text-amber-400">
                    10x {" "}
                </span>
                Faster with AI
            </div>
            <div className="relative h-20 w-full">
                <Image src="/bento-grid/illustration-five-stars.webp" fill className="object-contain" />

            </div>
            <div className="font-thin">
                Over 4,000 5-star reviews
            </div>
        </div>
        {/* TODO: Insta, twitter */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-multiple-platforms.webp" fill className="object-contain" />
        </div>
        {/* TODO: consistent schedule */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-consistent-schedule.webp" fill className="object-contain" />
        </div>
        {/* TODO: Schedule to social media. */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-schedule-posts.webp" fill className="object-contain" />
        </div>
        {/* TODO:graph followers */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-grow-followers.webp" fill className="object-contain" />
        </div>
        {/* TODO: faster audience growth */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-audience-growth.webp" fill className="object-contain" />
        </div>
        {/* TODO: create and schedule content */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-create-post.webp" fill className="object-contain" />
        </div>
        {/* TODO:  */}
        <div className="w-full h-full relative bg-red-700">
            <Image src="/bento-grid/illustration-ai-content.webp" fill className="object-contain" />
        </div>

    </div >
}
