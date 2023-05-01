import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <>
      <h1>Ninjas Page or Root of the folder</h1>
      {ninjas.map((ninja) => (
        <Link
          href={"/ninjas/" + ninja.id}
          key={ninja.id}
          className={styles.items}
        >
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </>
  );
};

export default Ninjas;
