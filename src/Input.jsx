import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js"

export default function Input ({ children, ...props }) {
  return (
    <SlInput {...props}>{children}</SlInput>
  )
}
