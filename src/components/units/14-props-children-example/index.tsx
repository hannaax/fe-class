export default function Example(props): JSX.Element {
  return (
    <div>
      <div>안녕하세요 짱구입니다</div>
      <div>{props.school}</div>
      {/* <div>{props.children}</div> */}
      <div>안녕하세요 철수입니다</div>
    </div>
  )
}
