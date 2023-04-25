import headerStyles from "../styles/sample.module.scss";
import { FiSearch } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import AppButton from "./Button";
import { categories } from "@/utils";

export default function SiteHeader(): JSX.Element {
  const mainLinks = ["Find Talent", "Find Work", "Why Upwork", "Enterprise"];

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.mainHeader}>
        <div className={headerStyles.branding}>
          <h1 className={headerStyles.siteBrand}>Upwork</h1>
          <div>
            <ul className={headerStyles.list}>
              {mainLinks.map((link) => (
                <li key={link}>
                  {link} <HiChevronDown />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={headerStyles.right}>
          <div className={headerStyles.search}>
            <FiSearch size={20} />
            <input placeholder="Search" />
            <div className={headerStyles.separator} />
            <AppButton
              label="Talent"
              right={<HiChevronDown className={headerStyles.chevron} />}
            />
          </div>
          <AppButton label="Log In" />
          <AppButton label="Sign Up" type="covered" />
        </div>
      </div>
      <div className={headerStyles.subMain}>
        <ul className={headerStyles.moreList}>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
