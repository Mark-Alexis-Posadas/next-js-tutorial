import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";
import Image from "next/image";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className="logo">
          <Image src="/leo.png" width={228} height={100} />
        </div>
        <ul>
          <Link
            href="/"
            className={router.pathname == "/" ? styles.active : ""}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={router.pathname == "/about" ? styles.active : ""}
          >
            About
          </Link>
          <Link
            href="/ninjas"
            className={router.pathname == "/ninjas" ? styles.active : ""}
          >
            Ninja Listing
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
