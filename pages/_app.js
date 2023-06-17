// import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

function MyApp({ Component }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장 => 나중에 더 자세히
  })

  return (
    <div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </div>
  )
}

export default MyApp
