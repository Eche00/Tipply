import { useState } from "react"

export const headerLogics = () => {
  const [dropDown, setDropDown] = useState(false)

  return { dropDown, setDropDown }
}