import { useForm } from "react-hook-form"
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./02-after.validation"
import Input01 from "../../../src/components/commons/inputs/01"

interface IFormData {
  writer: string
  title: string
  contents: string
  // boardAddress: {
  //   addressDetail: string
  // }
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const onClickSubmit = async (data: IFormData): void => {
    console.log(data)
  }

  console.log("리렌더링 확인")

  // 한줄일때 괄호() 필요 없음
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        GRAPHQL-API 요청
      </button>
      ;
    </form>
  )
}

/*
    <button type="reset">지우기</button>
    <button type="submit">등록하기</button>
*/
