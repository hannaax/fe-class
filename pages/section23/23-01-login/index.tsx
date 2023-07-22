import { gql, useMutation } from "@apollo/client"
import type { ChangeEvent } from "react"
import { useState } from "react"
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../src/commons/stores"
import { useRouter } from "next/router"

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`

export default function LoginPage(): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER)

  const [, SetAccessToken] = useRecoilState(accessTokenState)

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.id)
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.id)
  }

  const onClickLogin = async (): Promise<void> => {
    try {
      // 1. 로그인 뮤테이션 날려서 accssToken 받아오기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      })
      const accessToken = result.data?.loginUser.accessToken
      console.log(accessToken)

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해주세요!")
        return
      }
      SetAccessToken(accessToken)
      // SetAccessToken(accessToken ?? "")

      // 3. 로그인 성공 페이지로 이동하기
      void router.push("/section23/23-01-login-success")
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  )
}
