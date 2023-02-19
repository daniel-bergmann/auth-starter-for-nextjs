import type { AppProps } from "next/app"
import "../styles/globals.css"
import { useState, createContext, useEffect } from "react"

// usercontext is a global state that can be accessed from any component
export const GlobalContext = createContext({} as any)

// check if window exists and get token from localstorage
function getToken() {
  if (typeof window !== "undefined") {
    const storage = window.localStorage
    return storage.getItem("token")
  }
}
export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState<any>(getToken())
  const [loggedIn, setLoggedIn] = useState<any>(false)
  useEffect(() => {
    if (token) {
      setLoggedIn(true)
    } else if (!token) {
      setLoggedIn(false)
    }
  }, [token])

  return (
    <GlobalContext.Provider value={[loggedIn, setLoggedIn, token, setToken]}>
      <>
        <Component {...pageProps} />
      </>
    </GlobalContext.Provider>
  )
}
