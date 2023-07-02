import axios from "axios"
import { useState, useEffect } from "react"

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("")

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      console.log(result.data.message) // 사진 주소
      setDog(result.data.message)
    }

    void onClickSync()
  }, [])

  return (
    <div>
      <img src={dog} alt="" />
      {/* <button onClick={onClickSync}>REST-API(동기) 요청</button> */}
    </div>
  )
}
