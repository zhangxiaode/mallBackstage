const initialState = {
    menuIndex: -1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MENU_INDEX':
            return Object.assign({}, state, {
                menuIndex: action.text
            })
        default:
            return state;
    }
}
export default reducer
