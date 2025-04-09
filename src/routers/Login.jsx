import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const { setAuthenticate } = useOutletContext();
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <h2>로그인</h2>
        <form onSubmit={submitLogin}>
          <div>
            <input placeholder="아이디" />
            <input placeholder="비밀번호" />
          </div>
          <div className={styles.formBtn}>
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </form>
        <div className={styles.socialBtn}>
          <button>카카오 로그인</button>
          <button>네이버 로그인</button>
        </div>
      </div>
    </div>
  );
}
