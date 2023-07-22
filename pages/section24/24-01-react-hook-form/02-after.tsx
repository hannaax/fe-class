import { useForm } from "react-hook-form"
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc"

interface IFormData {
  writer: string
  title: string
  contents: string
  boardAddress: {
    addressDetail: string
  }
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>()

  const onClickSubmit = async (data: IFormData): void => {
    console.log(data)
  }

  console.log("리렌더링 확인")

  // 한줄일때 괄호() 필요 없음
  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button type="submit">GRAPHQL-API 요청</button>;
    </form>
  )
}

/*
    <button type="reset">지우기</button>
    <button type="submit">등록하기</button>
*/
