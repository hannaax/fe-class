import type { ChangeEvent, MouseEvent } from "react"
import { RedInput, BlueButton } from "./BoardWrite.styles"

interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        GRAPHQL-API 요청
      </BlueButton>
      ;
    </div>
  )
}

export const apple = 3
