import { useState } from "react"
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container"
import { useRecoilState } from "recoil"
import { useEffect } from "react"
import { isEditState } from "../../../src/commons/stores"

export default function GlobalStateWithRecoilPage(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)

  useEffect(() => {
    setIsEdit(true)
  }, [])

  return <BoardWrite />
}
