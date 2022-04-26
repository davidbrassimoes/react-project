export function reducer(state, action) {

    if (action.type === 'ADD_FAVORITE') {

        const { id } = action.event.target.nearestViewportElement
        console.log('add ', id)

        if (state.favorites.includes(id)) {
            console.log(state)
            return state
        }

        else {
            return {
                ...state,
                favorites: [...state.favorites, id]

            }
        }

    }
    if (action.type === 'DELETE_FAVORITE') {
        const { id } = action.event.target.nearestViewportElement
        console.log('delete ', id)

        if (state.favorites.includes(id)) {
            return {
                favorites: state.favorites.filter(f => f !== id)
            }
        }

        else {
            console.log(state)
            return state
        }

    }
    return state;
}