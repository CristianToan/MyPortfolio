import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import IntroSection from "../components/IntroSection";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillSection from "../components/SkillSection";
// import StrengthsWeaknessesSection from "../components/StrengthsWeaknessesSection";
import { SECTION_ID } from "../data/menu";
const LandingPage = () => {
  return (
    <div id="wrapper">
        <AppHeader />
        <section className="main">
          <IntroSection id={SECTION_ID.about} />
          {/* <StrengthsWeaknessesSection id={SECTION_ID.core} /> */}
          <SkillSection id={SECTION_ID.skills} />
          <ProjectsSection id={SECTION_ID.projects} />
          <ProfileSection id={SECTION_ID.contact} />
        </section>
        <AppFooter />
    </div>
  )
}

export default LandingPage
