import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할
        writer: "훈이",
        title: "안녕",
        contents: "반가워",
      },
    }); // axios.get()과 역할 동일
    console.log(result);
  };

  // 한줄일때 괄호() 필요 없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>;
}
