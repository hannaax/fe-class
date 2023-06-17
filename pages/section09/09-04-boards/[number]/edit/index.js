import BoardWrite from "../../../../../BoardWrite.presenter"

export default function GraphqlMutationPage() {
  // 한줄일때 괄호() 필요 없음
  return (
    <div>
      <div>############ 페이지 ##############</div>
      <BoardWrite isEdit={true} />
      <div>############ 페이지 ##############</div>
    </div>
  )
}
