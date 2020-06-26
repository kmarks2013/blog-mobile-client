import React, {useReducer} from 'react'

// a  lot of context calls will  look the same. this code abstarcts a lvel above the rest of the context files to handle that logic. 

export default (reducer, actions, initialState ) => {
    const Context = React.createContext()

    const Provider = ({children}) =>{
        const [state, dispatch] = useReducer(reducer, initialState)

        //actions === {addBlogPost: dispatch => {return () => {} } }
        //need to loop through actions object that will call on the correct action

        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return {Context, Provider}
}