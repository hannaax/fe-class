// import "../styles/globals.css";

import type { AppProps } from "next/app"
import Layout from "../src/components/commons/layout"
import ApolloSetting from "../src/components/commons/apollo"
import { Global } from "@emotion/react"
import { globalStyles } from "../src/commons/styles/globalStyles"

function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>======== 여기는 _app.js 컴포넌트 시작부분 입니다. ========</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>======== 여기는 _app.js 컴포넌트 시작부분 입니다. =========</div>
    </div>
  )
}

export default MyApp
