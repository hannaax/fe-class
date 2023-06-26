import Example from "../../../src/components/units/14-props-children-example"

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>+++++++++ 빨강 파랑 초록 ++++++++++++</div>
      <Example school="다람쥐초">
        <div>
          <input type="text" />
          <div>저는 철수입니다</div>
          <button>클릭</button>
        </div>
      </Example>
      <div>+++++++++ 빨강 파랑 초록 ++++++++++++</div>
    </div>
  )
}
