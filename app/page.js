function MentorCard() {
  //TODO make a proper navigation. This project is only meant to demonstrate copying skills. It deserves a single netlify thread
  return <div>A link for the page</div>;
}
const challenges = [{ link: "" }];
export default function Home() {
  return (
    <div className="">
      <h1 className="text-center text-sans text-6xl">
        Front End Mentor challenges
      </h1>
      {challenges.map((challenge, index) => (
        <MentorCard />
      ))}
    </div>
  );
}
