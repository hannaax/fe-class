import { useQuery, gql } from "@apollo/client"
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types"

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  )

  const onClickBasket = (basket: IBoard) => (event) => {
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]")

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id)
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다.")
      return
    }

    // 3. 내가 클릭한거 추가하기
    // delete basket.__typename // 안전하지 못한 사례
    const { __typename, ...newBasket } = basket // 안전한 사례
    baskets.push(newBasket)

    // 4. 추가된 장바구니 저장하기
    localStorage.setItem("baskets", JSON.stringify(baskets))
  }

  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </div>
  )
}
