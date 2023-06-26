import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container"

export default function GraphqlMutationPage(): JSX.Element {
  // 한줄일때 괄호() 필요 없음
  return (
    <div>
      <div>############ 페이지 ##############</div>
      <BoardWrite isEdit={false} />
      <div>############ 페이지 ##############</div>
    </div>
  )
}
