import { useQuery, gql } from "@apollo/client"
import type { MouseEvent } from "react"
import Checkbox from "./checkbox"

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards)

  //   const style = { margin: "10px" }

  const qqq1 = (): void => {
    alert("1번 클릭")
  }

  const qqq4 = (event: MouseEvent<HTMLSpanElement>): void => {
    event.stopPropagation()
    alert("4번 클릭")
  }

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <Checkbox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  )
}
