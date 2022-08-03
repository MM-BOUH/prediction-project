import React from "react"
import toast, { Toaster } from "react-hot-toast"

function Message() {
  const notify = () => toast.error("Enter valid data!")

  return (
    <>
      {notify()}
      <Toaster position="top-right" />
    </>
  )
}

export default Message
