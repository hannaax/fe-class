import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 2) {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD)

  console.log(data)

  return (
    <div>
      <div>2번 게시글 이동 완료</div>
      <div>작성자: {data && data.fetchBoard && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  )
}
