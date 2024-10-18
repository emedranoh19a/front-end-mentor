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

function NetlifyLink({ href, text }) {
  return <div className="py-6">



    <Link href={href} className="text-blue-700 transition-colors duration-300 hover:text-blue-500">
      {text}
    </Link>
  </div>
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
      <h1 className="text-center text-sans text-5xl my-10">
        Feast your eyes on Eric&apos;s magic!      </h1>
      <h2 className="text-center text-sans text-3xl my-10">
        Front End Mentor challenges (with TailwindCSS + NextJS)
      </h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto place-items-center">

        {challengeData.map((challenge, index) => (
          <MentorCard key={index} {...challenge} />
        ))}
      </div>
      <h2 className="text-center text-sans text-3xl my-10">
        Hosted on Netlify
      </h2>
      <NetlifyLink href="https://our-little-secret.netlify.app" text="【作成中】REDA舞神楽 WEBサイト (NextJS + TailwindCSS + Framer Motion) [CURRENTLY DOING]: A REAL PROJECT that I'm currently working on." />
      <NetlifyLink href="https://the-wild-oasis-enchanting-empanada.netlify.app" text="The Wild Oasis (ReactJS): A project from The Complete React Course on Udemy (Instructor: Jonas Schmedtmann). One of the greatest adventures through the wild terrains of React. I tackled powerful tools like React Query, mastering the art of cache invalidation for fetch requests.  Styled Components transformed my approach to design, while React Hook Form made handling forms feel like a breeze. I must admit though,  that the backend (Supabase in this case) might need a little more fine-tuning" />
      <NetlifyLink href="https://react-quiz-for-erichiki.netlify.app/" text="React Quiz (ReactJS): A project from The Complete React Course on Udemy (Instructor: Jonas Schmedtmann). This project took me on a whirlwind tour through the basics of reducers, Redux, and RTK—arming me with the tools to manage state like a pro (or at least close!). It’s the perfect combination of theory meeting hands-on practice, though, let’s be honest… my notes are calling for a good dusting off. A fun dive into state management, with just the right amount of 'wait, how did I do that again?' moments!" />
      <NetlifyLink href="https://trilloerichiki.netlify.app" text="Trillo (Sass): A project from the Advanced CSS and Sass course on Udemy (Instructor: Jonas Schmedtmann)" />
      <NetlifyLink href="https://cool-centaur-8a3c2e.netlify.app" text="Keeper (ReactJS): a project from The Complete Web Development Bootcamp course on Udemy (Instructor: Dr. Angela Yu)" />
      <NetlifyLink href="https://spontaneous-faun-6b5dfe.netlify.app" text="Kanban TODO (ReactJS): A toy project to put in practice React Beautiful D&D package" />

      <h2 className="text-center text-sans text-3xl my-10"> Baby steps. You are completely welcome to ignore all of these. (because we all start somewhere)</h2>
      <NetlifyLink href="https://emedranoh19a.github.io/WEBDev_Part1_HTML/ " text="HTML: The Complete Web Development Bootcamp course on Udemy (Instructor: Dr. Angela Yu). Yes, it’s ancient, untouched, and possibly fossilized, much like discovering a VHS tape in a world of streaming platforms." />
      <NetlifyLink href="https://emedranoh19a.github.io/WEBDev_Part2_CSS/ " text="CSS + HTML: The Complete Web Development Bootcamp course on Udemy (Instructor: Dr. Angela Yu). Who would’ve thought I'd one day be so mesmerized by the wonders of CSS? Back then, it was just me and plain HTML, no idea I’d soon be lost in a world of styling sorcery!" />
      <NetlifyLink href="https://emedranoh19a.github.io/WEBDev_Part3_Bootstrap/ " text="Bootstrap: The Complete Web Development Bootcamp course on Udemy (Instructor: Dr. Angela Yu).  Ah, little me—head over heels for Bootstrap like a teenager caught in their first crush. Back then, I was hopelessly devoted, blissfully unaware of the vast, beautiful world of frameworks and design waiting just beyond the horizon." />
      <NetlifyLink href="https://emedranoh19a.github.io/WEBDeb_Part5_JavaScript/ " text="JS (or JQuery?): The Complete Web Development Bootcamp course on Udemy (Instructor: Dr. Angela Yu).  This one was useless, and I remember striggling back then. Poor young me, I promise more challenging things are coming up!" />
      And I have made more! but let&apos;s keep it here!
    </div>
  )
}
