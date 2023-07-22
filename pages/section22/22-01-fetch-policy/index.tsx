import { useQuery, gql } from "@apollo/client"
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types"
import { useState } from "react"
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy"
import { useRouter } from "next/router"

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`

export default function StaticRoutingMovedPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  )

  // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
  const onClickIsOpen = (): void => {
    setIsOpen(true)
  }

  // 2. 새로운 페이지 이동에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved")
  }

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼 클릭 시 새로운 컴포넌트 나타남
      </button>
      {isOpen && <FetchPolicyExample />}
      ==================================
      <button onClick={onClickMove}>2. 버튼 클릭 시 페이지 이동</button>
    </div>
  )
}
