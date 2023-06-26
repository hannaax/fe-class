import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage(): JSX.Element {
  const Router = useRouter()

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: Number(Router.query.qqq) },
    }
  )

  return (
    <div>
      <div>{Router.query.qqq}번 게시글 이동 완료</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  )
}
