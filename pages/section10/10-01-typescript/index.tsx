export default function TypescriptPage(): JSX.Element {
  // 타입추론
  let aaa = "안녕하세요"
  aaa = 3

  // 타입명시
  let bbb: string = "반갑습니다"
  bbb = 10

  // 타입명시가 필요한 상황
  let ccc: number | string = 1000
  ccc = "1000원"

  // 숫자타입
  let ddd: number = 10
  ddd = "철수"

  // 불린타입
  let eee: boolean = true
  eee = false
  eee = "false" // true

  // 배열타입
  const fff: number[] = [1, 2, 3, 4, 5, "안녕"]
  const ggg: string[] = ["철", "영", "훈", 10]
  const hhh: Array<string | number> = ["철", 1] // 타입을 추론해서 어떤 타입 사용하는지 알아보기

  // 객체타입
  interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string
  }

  const profile: IProfile = {
    name: "짱구",
    age: 7,
    school: "떡잎유치원",
  }

  profile.name = "훈이" // 타입추론으로 이것만 가능
  profile.age = "7살"
  profile.hobby = "수영"

  // 함수타입
  function add(num1: number, num2: number, unit: string): string {
    return `${num1}${num2}${unit}`
  }
  const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

  const add2 = (num1: number, num2: number, unit: string): string => {
    return `${num1}${num2}${unit}`
  }
  const result2 = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

  // any타입
  let qqq: any = "철수" // 자바스크립트와 동일
  qqq = 123
  qqq = true

  console.log(aaa)
  console.log(bbb)
  console.log(ccc)
  console.log(ddd)
  console.log(eee)
  console.log(fff)
  console.log(ggg)
  console.log(hhh)
  console.log(result)
  console.log(add2)
  console.log(result2)
  console.log(qqq)

  return <></>
}
