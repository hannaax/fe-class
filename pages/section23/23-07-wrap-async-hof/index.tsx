import { useMutation, gql } from "@apollo/client"
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc"

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕", contents: "반가워") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수() // axios.get()과 역할 동일
    console.log(result)
  }

  // 한줄일때 괄호() 필요 없음
  return <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API 요청</button>
}
