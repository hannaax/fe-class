import { RedInput, BlueButton } from "./BoardWrite.styles"
import type { MouseEvent, ChangeEvent } from "react"

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
      <div>@@@@@@@@@@@@ 프리젠터 @@@@@@@@@@@@@@</div>
      <div>
        작성자: <RedInput type="text" onChange={props.onChangeWriter} />
        제목: <input type="text" onChange={props.onChangeTitle} />
        내용: <input type="text" onChange={props.onChangeContents} />
        <BlueButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </BlueButton>
      </div>
      <div>@@@@@@@@@@@@ 프리젠터 @@@@@@@@@@@@@@</div>
    </div>
  )
}
