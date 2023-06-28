import { useState } from "react"
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
