import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "짱구",
        createProductInput: {
          name: "키보드",
          detail: "로지텍키보드",
          price: 30000,
        },
      },
    }); // axios.get()과 역할 동일
    console.log(result);
  };

  // 한줄일때 괄호() 필요 없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>;
}
