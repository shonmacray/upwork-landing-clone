import headerStyles from "../styles/sample.module.scss";

interface Props {
  children: JSX.Element;
}

export default function SiteHeader({ children }: Props): JSX.Element {
  const mainLinks = ["Find Talent", "Find Work", "Why Upwork", "Enterprise"];
  const moreLinks = [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    "Admin & Customer Support",
    "More",
  ];
  return (
    <div>
      <div className={headerStyles.mainHeader}>
        <div className={headerStyles.branding}>
          <h1>Upwork</h1>
          <div>
            <ul>
              {mainLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>search</div>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
      <div>
        <ul>
          {moreLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}
