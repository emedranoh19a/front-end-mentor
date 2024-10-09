import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { challengeData } from "./challengeData"

function LevelTag({ level }) {


  //Style:

  const tagStyles = clsx("text-[12px] border border-px rounded-full py-1 px-3 shadow-sm shadow-white/70 bg-white/70",
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
  return <div className={tagStyles} style={{ textShadow: "1px 1px 10px white" }}>
    {tagLabel}
  </div>
}
function Status() {

}
function MentorCard({ link, image, level, title, content, status }) {

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


}
//Idea: This page should be navigatable in one instance.



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
