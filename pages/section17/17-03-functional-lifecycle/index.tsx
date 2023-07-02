import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0)
  const router = useRouter()

  // componentDidMount 와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행")
  }, [])

  // componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행")
  })

  // componentWillUnmount 와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기 전에 실행")
    }
  }, [])

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행")

    return () => {
      console.log("사라지기 전에 실행")
    }
  })

  // 2. useEffect 잘못된 사용법(1. 추가렌더링, 무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1)
  // }, [count])

  // 이미 다 그려졌는데 바뀐 스테이트로 추가 렌더링 발생!!

  const onClickCountUp = (): void => {
    console.log(count)
    setCount(1)
  }

  const onClickMove = (): void => {
    void router.push("/")
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  )
}
