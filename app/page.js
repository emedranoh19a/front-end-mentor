import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { challengeData } from "./challengeData"

function LevelTag({ level }) {


  //Style:

  const tagStyles = clsx("text-[12px] border border-px rounded-full py-1 px-3",
    level === 1 && "border-fuchsia-400 text-fuchsia-400",
    level === 2 && "border-sky-400 text-sky-400",
    level === 3 && "border-amber-400 text-amber-400",
    level === 4 && "border-red-400 text-red-400",
    level === 5 && "border-indigo-400 text-indigo-400",
  )

  //Elegir mis colores. 
  //Azul claro
  //Rosa
  //Amarillo
  //Rojo
  //Morado

  //Dataflow:
  const tagLabel = level === 1 ? "超初級" : level === 2 ? "初級" : level === 3 ? "中級" : level === 4 ? "高級" : level === 5 ? "超高級" : "未知級"
  return <div className={tagStyles}>
    {tagLabel}
  </div>
}
function Status() {

}
function MentorCard({ link, image, level, title, content, status }) {

  console.log(link)
  return <div className="relative flex flex-col justify-between items-center  w-60 min-h-80 rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40">
    <div>

      <div className="relative h-40 w-full">
        <Image src={image} fill objectFit="cover" alt={title} />
        <div className="absolute top-2 right-2  w-fit ">
          <LevelTag level={level} />
        </div>
      </div>
      <div className="w-full h-full p-2">
        <div className="text-md font-bold">{title}</div>
        <div className="text-xs"> {content}</div>
      </div>
    </div>
    <div className="self-end mb-4 mr-4">
      {status === "ok" && <Link href={link} className="transition-colors duartion-300 bg-slate-800 py-2 px-4 rounded-lg text-white/90 hover:text-slate-800 hover:bg-white">Go!</Link>
      }

    </div>
  </div>

  // <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //       <div className="relative w-full h-1/3">

  //       <Image className="rounded-t-lg absolute w-full h-full" src={image} fill objectFit="cover" />
  //       </div>

  //     <div class="p-5">
  //         <a href="#">
  //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  //         </a>
  //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  //         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  //             Read more
  //              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  //             </svg>
  //         </a>
  //     </div>
  // </div>

}
//TODO: IMPORTANT! Create a main layout. This should be my portfolio.
//Idea: This page should be navigatable in one instance.
//Link, img, title,



export default function Home() {
  return (
    <div className="max-w-screen w-fit mx-auto">
      <h1 className="text-center text-sans text-3xl my-10">
        Front End Mentor challenges
      </h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto place-items-center">

        {challengeData.map((challenge, index) => (
          <MentorCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  )
}
