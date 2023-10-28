import NavBar from "./components/NavBar";
import CenterIntro from "./components/CenterIntro";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import LetsCookCard from "./components/LetsCookCard";
import AutoBuddyCard from "./components/AutoBuddyCard";
import AboutMeSection from "./components/AboutMeSection";
import InterestsSection from "./components/InterestsSection";

import 'intersection-observer'
import {useInView} from 'react-intersection-observer'

function App() {
  return <> {
    <div>
      <NavBar />
      <CenterIntro />
      <AboutMeSection />
      <SkillSection />
      <ProjectSection />
      <InterestsSection />
    </div>
  }
  </>
}

export default App;