export default function MapElPage(): JSX.Element {
  // 1. 기본방법
  ;["짱구", "철수", "훈이"]
    .forEach((el, index) => {
      console.log("el:", el)
      console.log("index:", index)
    })

    [
      // 2. 매개변수 변경한 방법
      ("짱구", "철수", "훈이")
    ].forEach((aaaa, bbbb) => {
      console.log("el:", aaaa)
      console.log("index:", bbbb)
    })

    [
      // 3. 함수 선언식 방법
      ("짱구", "철수", "훈이")
    ].forEach(function (el, index) {
      console.log("el:", el)
      console.log("index:", index)
    })

    [
      // 4. el과 index 바꾸기
      ("짱구", "철수", "훈이")
    ].forEach((index, el) => {
      console.log("el:", el)
      console.log("index:", index)
    })

  return <></>
}
