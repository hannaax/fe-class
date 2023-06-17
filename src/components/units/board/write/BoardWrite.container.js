import { useMutation } from "@apollo/client"
import { useState } from "react"
import { 나의그래프큐엘셋팅, 나의셋팅2 } from "./BoardWrite.queries" // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기
import Adfdfdf from "./BoardWrite.presenter" // export default로 이름 바꿔서 가져오기
import Adfdfdf, { apple } from "./BoardWrite.presenter" // export default와 export 함께 가져오기

import * as S from "./BoardWrite.styles" // export 한방에 다 가져오기
S.BlueButton // export 한방에 다 가져오기
S.RedInput // export 한방에 다 가져오기

export default function BoardWrite() {
  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()

  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할
        writer: writer,
        title: title,
        contents: contents,
      },
    }) // axios.get()과 역할 동일
    console.log(result)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  return (
    <BoardWriteUI
      // <Adfdfdf
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    />
  )
}
