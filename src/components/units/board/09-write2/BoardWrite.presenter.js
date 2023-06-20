import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>@@@@@@@@@@@@ 프리젠터 @@@@@@@@@@@@@@</div>
      <div>
        작성자:{" "}
        <RedInput
          type="text"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoards.writer}
        />
        제목:{" "}
        <input
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoards.title}
        />
        내용:{" "}
        <input
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoards.contents}
        />
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
