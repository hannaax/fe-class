import { useMutation } from "@apollo/client"
import { useState } from "react"
import type { ChangeEvent } from "react"
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries" // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기
// import Adfdfdf from "./BoardWrite.presenter" // export default로 이름 바꿔서 가져오기
// import Adfdfdf, { adpple } from "./BoardWrite.presenter" // export default와 export 함께 가져오기
import { useRouter } from "next/router"
import type { IBoardWriteProps, IMyvariables } from "./BoardWrite.types"

// import * as S from "./BoardWrite.styles" // export 한방에 다 가져오기
// S.BlueButton // export 한방에 다 가져오기
// S.RedInput // export 한방에 다 가져오기

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter()

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [나의함수] = useMutation(나의그래프큐엘셋팅)
  const [updateBoard] = useMutation(UPDATE_BOARD)

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
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    )
  }

  const onClickUpdate = async () => {
    const myvariables: IMyvariables = { number: Number(router.query.number) }
    if (title) myvariables.title = title
    if (writer) myvariables.writer = writer
    if (contents) myvariables.contents = contents

    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer,
        title,
        contents,
      },
    })
    console.log(result)
    router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    )
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value)
  }

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} // undefined 이거나, data
    />
  )
}
