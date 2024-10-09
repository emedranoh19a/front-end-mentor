function MentorCard() {
  //TODO make a proper navigation. This project is only meant to demonstrate copying skills. It deserves a single netlify thread
  return <>A link for the page</>;
}
const challenges = [
  //Newbie
  //TODO: Recipe page
  //TODO: Social links profile 
  //TODO: Blog preview card
  //TODO: FAQ accordion
  //TODO: Workit landing page
  //TODO: Results summary component
  //TODO: Product preview card
  //TODO: Skilled e-learning landing page
  //TODO: Interactive rating component
  //TODO: QR code component
  //TODO: NFT preview card comonent
  //TODO: Equalizer landing page
  //TODO: Order summary component
  //TODO: Stats preview card component
  //TODO: Meet landing page
  //TODO: 3-column preview card component
  //TODO: Pod request access landing page
  //TODO: Profile card component
  //TODO: Social proof section
  //TODO: Article preview commponent
  //TODO: Four cad feature section
  //TODO: Base Apparel coming soon page
  //TODO: Introcomponent with sign-up form
  //TODO: Single price grid component
  //TODO: Ping single column coming soon page
  //TODO: Huddle landing page with a single introductory section

  //Junior
  //TODO: Bento grid
  //TODO: Product list with cart
  //TODO: Mortgage repayment calculator
  //TODO: Contact form
  //TODO: Newsletter sign-up form with success message.
  //TODO: Body Mass Index calculator
  //TODO: Age calculator app
  //TODO: Single-page deveoper portfolio
  //TODO: News homepage
  //TODO: Notifications page
  //TODO: Interactive card details form
  //TODO: Single-page design portfolio
  //TODO: Expenses chart component
  //TODO: Intro section with dropdownn navigation
  //TODO: Advice generator app
  //TODO: Suite landing page
  //TODO: Art gallery website
  //TODO: Time tracking dashboard
  //TODO: GitHub user search app
  //TODO: Tip calculator app
  //TODO: Agency landing page
  //TODO: Typemaster pre-launch landing page
  //TODO: Blogr landing page
  //TODO: Crowdfuncing product page
  //TODO: Interactive pricing component
  //TODO: Maker pre-launch landing page
  //TODO: Loopstudios landing page
  //TODO: Officelite coming soon site
  //TODO: Testimonials grid section
  //TODO: Fylo data storage component
  //TODO: Coding bootcamp testimonials slider
  //TODO: Social media dashboard with theme switcher
  //TODO: Insure landing page
  //TODO: Pricing component with toggle
  //TODO: Project tracking intro component
  //TODO: Clipboard landing page
  //TODO: Huddle landing page with alternating feature blocks
  //TODO: Fylo dark theme landing page
  //TODO: Fylo landing page with two column layout
  //TODO: Huddle landing page with curved sections

  //Intermediate
  //TODO: Frontend Quiz app
  //TODO: Dictionary web app
  //TODO: Password generator app
  //TODO: In-browser markdown editor
  //TODO: Itc Tac Toe game
  //TODO: Interactive comments section
  //TODO: Space tourism multi-page website
  //TODO: E-commerce product page
  //TODO: Galleria slideshow site
  //TODO: Planets fact site
  //TODO: Calculator app
  //TODO: coffeeroasters subscription site
  //TODO: Launch cocuntdown timer
  //TODO: Creatuve agency single-page site
  //TODO: Todo app
  //TODO: Clock app
  //TODO: Room homepage
  //TODO: IP Address Tracker
  //TODO: Chat app CSS illustration
  //TODO: Scoot multi-page website
  //TODO: Dine restaurant website
  //TODO: Minimalist portfolio website
  //TODO: Job listings with filtering
  //TODO: Easybank landing page
  //TODO: Manage landing page
  //TODO: URL shortening API landing
  //TODO: Bookmark landing page

  //Advanced.
  //TODO: Hangmman game
  //TODO: Multi-step form
  //TODO: Connect Four game
  //TODO:  Entertainment web app
  //TODO: Memory game
  //TODO: Pomodoro app
  //TODO: Devjobs web app
  //TODO: API multi-page website
  //TODO: Photosnap multi-page website
  //TODO: Arch Studio mulkti-page website
  //TODO: myteam multi-page website
  //TODO: Rock, Paper, Scissors game
  //TODO: REST Countries API with color theme witcher

  //Guru: (Paid version) only if this actually works
  //TODO: Personal finance app
  //TODO: Link-sharing app
  //TODO: Kanban task management web app
  //TODO: Product feedback app
  //TODO: audiophile e-commerce website
  //TODO: Invoice app
  //TODO: Designo multi-page website
  
  { link: "/recipe-page", img:"" },
  { link: "/profile-links", img:"" },
  { link: "", img:"" },
  { link: "", img:"" },
  { link: "", img:"" },
  { link: "", img:"" },
  { link: "", img:"" }];
export default function Home() {
  return (
    <div className="">
      <h1 className="text-center text-sans text-6xl">
        Front End Mentor challenges
      </h1>
      {challenges.map((challenge, index) => (
        <MentorCard key={index} />
      ))}
    </div>
  );
}
