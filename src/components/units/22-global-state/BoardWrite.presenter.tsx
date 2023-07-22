import { useRecoilState } from "recoil"
import { isEditState } from "../../../commons/stores"

export default function BoardWriteUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)

  return <div>{isEdit === true ? "수정" : "등록"}</div>
}
