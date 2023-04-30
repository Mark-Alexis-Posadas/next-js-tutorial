import Link from "next/link";
import styles from "../styles/Nav.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/ninjas">Ninja Listing</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
