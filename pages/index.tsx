import React, { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { GlobalContext } from "./_app"

export default function Index() {
  const [loggedin] = useContext(GlobalContext)
  const router = useRouter()

  useEffect(() => {
    if (!loggedin) {
      router.push("/login")
    }
  }, [loggedin])

  // function for logout
  const logoutHandler = () => {
    localStorage.removeItem("token")
    router.reload()
  }

  if (!loggedin) {
    return
  } else {
    return (
      <div>
        <h1>Hello there</h1>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    )
  }
}
