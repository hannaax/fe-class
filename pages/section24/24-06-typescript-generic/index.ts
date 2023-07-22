// 1. 문자/숫자/불린(primitive) 타입

//
//
// 1. generic 타입
function getGeneric<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1]
}

const result = getGeneric("짱구", 123, true)

//
//
// 1. generic 타입
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1]
}

const result = getGeneric2("짱구", 123, true)

//
//
// 1. generic 타입
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1]
}

const result = getGeneric3("짱구", 123, true)

//
//
// 1. generic 타입
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V) [V, U, T] => {
    return [arg3, arg2, arg1]
  }
  
  const result = getGeneric4("짱구", 123, true)
  
