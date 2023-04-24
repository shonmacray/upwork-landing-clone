import { Kumbh_Sans } from "next/font/google";
import homeStyles from "../styles/home.module.scss";
import AppButton from "@/components/Button";
import ListWithIcon from "@/components/ListWithIcon";
import { BiEdit } from "react-icons/bi";
import { TiPinOutline } from "react-icons/ti";
import { RiShieldStarLine } from "react-icons/ri";

const inter = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={homeStyles.container}>
      <div className={homeStyles.hero}>
        <div>
          <h1>How work should work</h1>
          <h4>
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </h4>
          <AppButton label="Get Started" type="covered" />
          <div className={homeStyles.trust}>
            <p>Trusted by</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className={homeStyles.sections}>
        <div className={homeStyles.sectionOne}></div>
        <div className={homeStyles.separatorX} />
        <div className={homeStyles.sectionTwo}>
          <h1>Up your work game, it’s free.</h1>
          <ListWithIcon
            title="No cost to join."
            subTitle="Register and browse professionals, explore projects, or even book a consultation."
            icon={<BiEdit size={26} />}
          />
          <ListWithIcon
            title="Post a job and hire top talent."
            subTitle="Finding talent doesn’t have to be a chore. Post a job or we can search for you!"
            icon={<TiPinOutline size={26} />}
          />
          <ListWithIcon
            title="Work with the best—without breaking the bank."
            subTitle="Upwork makes it affordable to up your work and take advantage of low transaction rates."
            icon={<RiShieldStarLine size={26} />}
          />
          <div className={homeStyles.btnContainer}>
            <AppButton label="Sign up for free" type="covered" />
            <div className={homeStyles.separatorX} />
            <AppButton label="Learn how to hire" type="outline" />
          </div>
        </div>
      </div>
    </main>
  );
}
