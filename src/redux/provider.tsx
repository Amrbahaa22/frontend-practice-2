import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./store"

type TProviderType = {
    children: ReactNode
}
export const ReduxProvider: React.FC<TProviderType> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}