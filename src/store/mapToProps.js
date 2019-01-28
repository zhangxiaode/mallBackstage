//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { 
        menuIndex: state.menuIndex 
    }
}
//action
const changeMenuIndex = {
    type:'CHANGE_MENU_INDEX',
    text:-1
}

//映射Redux actions到组件的属性
const mapDispatchToProps = dispatch => {
    return{
        changeMenuIndex : text => {
            changeMenuIndex.text = text
            dispatch(changeMenuIndex)
        }
    }
}
export {mapStateToProps, mapDispatchToProps}
