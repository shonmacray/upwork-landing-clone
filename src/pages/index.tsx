import homeStyles from "../styles/home.module.scss";
import AppButton from "@/components/Button";
import ListWithIcon from "@/components/ListWithIcon";
import { BiEdit } from "react-icons/bi";
import { TiPinOutline } from "react-icons/ti";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import {
  HiOutlineBriefcase,
  HiArrowRight,
  HiStar,
  HiCurrencyDollar,
  HiCheckCircle,
} from "react-icons/hi";
import { MdHeadsetMic, MdStars } from "react-icons/md";
import { BsAward } from "react-icons/bs";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiAppleFill,
  RiAndroidFill,
} from "react-icons/ri";
import { categories } from "@/utils";
import ListWithIcon2 from "@/components/ListWithIcon2";
import Card from "@/components/Card";
import SiteHeader from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <div className={homeStyles.space} />
      <main className={homeStyles.container}>
        <div className={homeStyles.hero}>
          <div>
            <h1>How work should work</h1>
            <h4>
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </h4>
            <AppButton label="Get Started" type="covered" />
            <div className={homeStyles.trust}>
              <p>Trusted by</p>
              <ul>
                <Image
                  className={homeStyles.image}
                  alt="one"
                  src="/microsoft.svg"
                  height="80"
                  width="100"
                />
                <Image
                  className={homeStyles.image}
                  alt="one"
                  src="/airbnb.svg"
                  height="50"
                  width="80"
                />
                <Image
                  className={homeStyles.image}
                  alt="one"
                  src="/bissell.svg"
                  height="60"
                  width="60"
                />
              </ul>
            </div>
          </div>
          <div>
            <Image alt="one" src="/globe@2x.jpg" height="400" width="400" />
          </div>
        </div>

        <div className={homeStyles.sections}>
          <div className={homeStyles.sectionOne}>
            <Image alt="one" src="/s.png" height="1000" width="800" />
          </div>
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
        <div className={homeStyles.space} />
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
                    <HiStar className={homeStyles.icon} /> 4.56/5
                  </div>
                  <div>453 skills</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={homeStyles.space} />
        <div className={homeStyles.sectionFour}>
          <div className={homeStyles.enter}>
            <h4>Enterprise Suite</h4>
            <h1>
              <span>This is how</span>
              <br /> good companies find good company.
            </h1>
            <p>
              Access the top 1% of talent on Upwork, and a full suite of hybrid
              workforce management tools. This is how innovation works now.
            </p>
            <div className={homeStyles.listContainer}>
              <div className={homeStyles.listWithIcon}>
                <HiOutlineWrenchScrewdriver size={22} color="#91e6b3" />
                <p>Access expert talent to fill your skill gaps</p>
              </div>
              <div className={homeStyles.listWithIcon}>
                <HiOutlineBriefcase size={22} color="#91e6b3" />
                <p>Control your workflow: hire, classify and pay your talent</p>
              </div>
              <div className={homeStyles.listWithIcon}>
                <MdHeadsetMic size={22} color="#91e6b3" />
                <p>Partner with Upwork for end-to-end support</p>
              </div>
            </div>
            <AppButton type="green" label="Learn more" />
          </div>
          <div className={homeStyles.image2}>
            <Image alt="one" src="/sw.jpg" height="400" width="525" />
          </div>
        </div>
        <div className={homeStyles.space1} />
        <div className={homeStyles.forClients}>
          <div>
            <h4>For clients</h4>
          </div>
          <div className={homeStyles.sectionTwo}>
            <h1 className={homeStyles.h1}>Find talent your way</h1>
            <p className={homeStyles.p}>
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <div className={homeStyles.listContainer}>
              <div className={homeStyles.card1}>
                <h1>Post a job and hire a pro</h1>
                <div className={homeStyles.iconContainer}>
                  <p>Talent Marketplace &trade;</p>
                  <HiArrowRight className={homeStyles.icon} size={23} />
                </div>
              </div>
              <div className={homeStyles.card1}>
                <h1>Browse and buy projects</h1>
                <div className={homeStyles.iconContainer}>
                  <p>Talent Marketplace &trade;</p>
                  <HiArrowRight className={homeStyles.icon} size={23} />
                </div>
              </div>
              <div className={homeStyles.card1}>
                <h1 className={homeStyles.longWords}>
                  Let us help you find the right talent
                </h1>
                <div className={homeStyles.iconContainer}>
                  <p>Talent Marketplace &trade;</p>
                  <HiArrowRight className={homeStyles.icon} size={23} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={homeStyles.space} />
        <div className={homeStyles.space} />
        <div className={homeStyles.why}>
          <Image
            alt="one"
            src="/se.png"
            height="365"
            width="365"
            className={homeStyles.imageInner}
          />
          <div className={homeStyles.inner}>
            <div className={homeStyles.left}>
              <h1 className={homeStyles.h1}>Why businesses turn to Upwork</h1>
              <ListWithIcon2
                title="Proof of quality"
                subTitle="Check any pro’s work samples, client reviews, and identity verification."
                icon={<MdStars size={26} />}
              />
              <ListWithIcon2
                title="No cost until you hire"
                subTitle="Interview potential fits for your job, negotiate rates, and only pay for work you approve."
                icon={<HiCurrencyDollar size={26} />}
              />
              <ListWithIcon2
                title="Safe and secure"
                subTitle="Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it."
                icon={<HiCheckCircle size={26} />}
              />
            </div>
            <div className={homeStyles.right}>
              <div>
                <h1>
                  We’re
                  <br /> the world’s work makertplace
                </h1>
                <ListWithIcon2
                  light
                  title="4.9/5"
                  subTitle="Clients rate professionals on Upwork"
                  icon={<HiStar size={50} />}
                />
                <ListWithIcon2
                  light
                  title="Award winner"
                  subTitle="G2’s 2021 Best Software Awards"
                  icon={<BsAward size={50} />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={homeStyles.space1} />
        <div className={homeStyles.forTalent}>
          <div className={homeStyles.talentLeft}>
            <Image alt="one" src="/sx.jpg" height="365" width="670" />
          </div>
          <div className={homeStyles.talentRight}>
            <div>
              <h4>For talent</h4>
              <h1>Find great work</h1>
              <p>
                Meet clients you’re excited to work with and take your career or
                business to new heights.
              </p>
            </div>
            <div>
              <div className={homeStyles.listn}>
                <p>
                  Find opportunities for every stage of your freelance career
                </p>
                <p>Control when, where, and how you work</p>
                <p>Explore different ways to earn</p>
              </div>
              <AppButton type="blue" label="Find Opportunites" />
            </div>
          </div>
        </div>
        <div className={homeStyles.sliderContainer}>
          <h1>Trusted by leading brands and startups</h1>
          <div className={homeStyles.slider}>
            <Card
              title="“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”"
              subTitle="Josh Machiz, Chief Digital Officer"
              icon={
                <Image
                  alt="one"
                  src="/nasdaq-light.svg"
                  height="180"
                  width="180"
                />
              }
            />
            <Card
              title="“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”"
              subTitle="Carol Taylor, Director of Content Experience"
              icon={
                <Image
                  alt="one"
                  src="/microsoft-lg-light.svg"
                  height="180"
                  width="180"
                />
              }
              num={2}
            />
            <div className={homeStyles.card2}>
              <div className={homeStyles.one} />
              <div className={homeStyles.two}>
                <h4>And many more</h4>
                <Image
                  alt="one"
                  src="/nasdaq-light.svg"
                  height="120"
                  width="120"
                />
                <Image
                  alt="one"
                  src="/automattic-light.svg"
                  height="100"
                  width="190"
                />
                <Image
                  alt="one"
                  src="/bissell-light.svg"
                  height="60"
                  width="60"
                />
                <Image alt="one" src="/coty-light.svg" height="80" width="80" />
                <Image
                  alt="one"
                  src="/rancher-v2-light.svg"
                  height="80"
                  width="80"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={homeStyles.space1} />
        <div className={homeStyles.space} />
        <div className={homeStyles.space} />
        <div className={homeStyles.support}>
          <h1>We support Ukraine</h1>
          <p>
            We are taking action to help our freelancers, our clients, and the
            people of Ukraine—and so can you.
          </p>
          <AppButton type="outline" label="Learn more" />
        </div>
        <div className={homeStyles.space1} />
        <div className={homeStyles.space} />
        <div className={homeStyles.space} />
        <div className={homeStyles.skillList}>
          <div className={homeStyles.sleft}>
            <h1>Top skills</h1>
            <h1>Trending skills</h1>
            <h1>Top skills in US</h1>
            <h1>Project CatalogTM</h1>
          </div>
          <div className={homeStyles.sright}>
            <ul>
              <li>Data Entry Specialists</li>
              <li>Video Editors</li>
              <li>Data Analyst</li>
              <li>Shopify Developer</li>
              <li>Ruby on Rails Developer</li>
              <li>Android Developer</li>
              <li>Bookkeeper</li>
              <li>Content Writer</li>
              <li>Copywriter</li>
              <li>Database Administrator</li>
              <li>Data Scientist</li>
              <li>Front-End Developer</li>
              <li>Game Developer</li>
              <li>Graphic Designer</li>
              <li>iOS Developer</li>
              <li>Java Developer</li>
              <li>JavaScript Developer</li>
              <li>Logo Designer</li>
              <li>Mobile App Developer</li>
              <li>PHP Developer</li>
              <li>Python Developer</li>
              <li>Resume Writer</li>
              <li>SEO Expert</li>
              <li>Social Media Manager</li>
              <li>Software Developer</li>
              <li>Software Engineer</li>
              <li>Technical Writer</li>
              <li>UI Designer</li>
              <li>UX Designer</li>
              <li>Virtual Assistant</li>
              <li>Web Designer</li>
              <li>Wordpress Developer</li>
            </ul>
          </div>
        </div>
        <div className={homeStyles.space} />
        <div className={homeStyles.space} />
        <footer className={homeStyles.footer}>
          <div className={homeStyles.links}>
            <div>
              <p>For Clients</p>
              <ul>
                <li>How to Hire</li>
                <li>Talent Marketplace</li>
                <li>Project Catalog</li>
                <li>Talent Scout</li>
                <li>Hire an Agency</li>
                <li>Enterprise</li>
                <li>Payroll Services</li>
                <li>Direct Contracts</li>
                <li>Hire Worldwide</li>
                <li>Hire in the USA</li>
              </ul>
            </div>
            <div>
              <p>For Talent</p>
              <ul>
                <li>How to Find Work</li>
                <li>Direct Contracts</li>
                <li>Find Freelance Jobs Worldwide</li>
                <li>Find Freelance Jobs in the USA</li>
              </ul>
            </div>
            <div>
              <p>Resources</p>
              <ul>
                <li>Help & Support</li>
                <li>Success Stories</li>
                <li>Upwork Reviews</li>
                <li>Resources</li>
                <li>Blog</li>
                <li>Community</li>
                <li>Affiliate Program</li>
                <li>Free Business tools</li>
              </ul>
            </div>
            <div>
              <p>Company</p>
              <ul>
                <li>About Us</li>
                <li>Leadership</li>
                <li>Investor Relations</li>
                <li>Careers</li>
                <li>Our Impact</li>
                <li>Press</li>
                <li>Contact Us</li>
                <li>Trust, Safety & Security</li>
                <li>Modern Slavery Statement</li>
              </ul>
            </div>
          </div>
          <div className={homeStyles.follow}>
            <ul>
              <p>Follow Us</p>
              <li>
                <RiFacebookFill />
              </li>
              <li>
                <RiLinkedinFill />
              </li>
              <li>
                <RiTwitterFill />
              </li>
              <li>
                <RiYoutubeFill />
              </li>
              <li>
                <RiInstagramFill />
              </li>
            </ul>
            <ul>
              <p>Mobile App</p>
              <li>
                <RiAppleFill />
              </li>
              <li>
                <RiAndroidFill />
              </li>
            </ul>
          </div>
          <div className={homeStyles.last}>
            <ul>
              <p>© 2015 - 2023 Upwork® Global Inc.</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>CA Notice at Collection</p>
              <p>Cookie Settings</p>
              <p>Accessibility</p>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
}
