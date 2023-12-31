import { useMutation } from "@apollo/client"
import { useState } from "react"
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries" // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기
import type { ChangeEvent } from "react"

// import * as S from "./BoardWrite.styles" // export 한방에 다 가져오기
// S.BlueButton // export 한방에 다 가져오기
// S.RedInput // export 한방에 다 가져오기

export default function BoardWrite(): JSX.Element {
  const [isActive, setIsActive] = useState(false)

  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()

  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할
        writer,
        title,
        contents,
      },
    }) // axios.get()과 역할 동일
    console.log(result)
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value)
    if (event.target.value && title && contents) setIsActive(true)
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
    if (writer && event.target.value && contents) setIsActive(true)
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value)
    if (writer && title && event.target.value) setIsActive(true)
  }

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  )
}
