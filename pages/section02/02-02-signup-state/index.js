import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeEmail = (event) => {
    // event : 나의 행동
    // event.target : 작동된 태그
    // event.target.value : 작동된 태그에 입력된 값
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignup = () => {
    console.log(email); // 잘 포장됐는지 확인
    console.log(password); // 잘 포장됐는지 확인

    // 1. 검증
    if (!email.includes("@")) {
      //   alert("이메일이 올바르지 않습니다!");
      setEmailError("이메일이 올바르지 않습니다!");
    } else {
      // 2. 백엔드 컴퓨터에 보내주기 (백엔드 개발자가 만든 함수, 즉 API)

      // 3. 성공알람
      alert("회원가입을 축하합니다");
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
