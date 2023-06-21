import { useQuery, gql } from "@apollo/client"
import { MouseEvent } from "react"

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards)

  //   const style = { margin: "10px" }

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    // if(event.target instanceof HTMLDivElement)
    alert(`${event.currentTarget.id}님이 작성한 게시글입니다.`)
  }

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={onClickAlert}>
          <input type="checkbox" />
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  )
}
