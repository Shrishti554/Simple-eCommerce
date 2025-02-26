import CenterPage from "../components/Center-page";
import styles from "./Success.css";

const Success = () => {
  return (
    <CenterPage>
      <div className={styles.card}>
        <div className={styles.inner_card}>
          <i className={styles.checkmark}>✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request.
          <br /> we'll process it soon.
        </p>
      </div>
    </CenterPage>
  );
};

export default Success;
