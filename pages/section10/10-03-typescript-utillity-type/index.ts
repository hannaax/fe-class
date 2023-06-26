export interface IProfile {
  name: string
  age: number
  school: string
  hobby?: string
}

// 1. Partial 타입
type aaa = Partial<IProfile>
const qqq: aaa = {
  name: "철수",
  age: 12,
  school: "떡잎유치원",
}
console.log(qqq)

// 2. Required 타입
type bbb = Required<IProfile>

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit 타입
type ddd = Omit<IProfile, "school">

// 5. Record 타입
type eee = "철수" | "영희" | "훈이" // Union 타입
const child1: eee = "철수" // 철수, 영희, 훈이만 됨
const child2: string = "사과"

type fff = Record<eee, IProfile> // Record 타입

// 6. 객체의 key들로 union타입 만들기
type ggg = keyof IProfile // 'name' | 'age' | 'school' | 'hobby'
const myprofile: ggg = "hobby"

// 7. type vs interface 차이 => interface는 선언병합 가능
export interface IProfile {
  candy: number // 선언병합으로 추가됨
}

// 8. 배운 것 응용
const profile: Partial<IProfile> = {
  candy: 10,
  school: "떡잎유치원",
}
