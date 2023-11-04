import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up'){
                const copy = [...state]
                copy.sort((a,b) => a.name.localeCompare(b.name))
                return  copy
            }
            else if (action.payload === 'down'){
                const copy = [...state]
                copy.sort((a,b) => b.name.localeCompare(a.name))
                return  copy
            }
            else {
                return  state
            }

        }
        case 'check': {

            return  [...state].filter(u => u.age > action.payload )
        }
        default:
            return state
    }
}
