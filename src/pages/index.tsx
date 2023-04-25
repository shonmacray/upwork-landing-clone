import { Kumbh_Sans } from "next/font/google";
import homeStyles from "../styles/home.module.scss";
import AppButton from "@/components/Button";
import ListWithIcon from "@/components/ListWithIcon";
import { BiEdit } from "react-icons/bi";
import { TiPinOutline } from "react-icons/ti";
import { RiShieldStarLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

import { categories } from "@/utils";

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
      <div className={homeStyles.sectionThree}>
        <h1>Browse talent by category</h1>
        <p className={homeStyles.looking}>
          Looking for work? <span>Browse jobs</span>
        </p>
        <div className={homeStyles.categories}>
          {categories.map((category) => (
            <div className={homeStyles.category} key={category}>
              <p>{category}</p>
              <div className={homeStyles.more}>
                <div className={homeStyles.withIcon}>
                  <AiFillStar className={homeStyles.icon} /> 4.56/5
                </div>
                <div>453 skills</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
