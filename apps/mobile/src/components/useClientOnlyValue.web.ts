import React from "react"

// `useEffect` is not invoked during server rendering, meaning
// we can use this to determine if we're on the server or not.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  // eslint-disable-next-line import/no-named-as-default-member
  const [value, setValue] = React.useState<S | C>(server)
  // eslint-disable-next-line import/no-named-as-default-member
  React.useEffect(() => {
    setValue(client)
  }, [client])

  return value
}
