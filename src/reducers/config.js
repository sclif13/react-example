const initialState = {
    isActive: false
};

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case 'APP_CLICK': {
            return { isActive: action.isActive }
        }
        case 'FIGURE_CLICK': {
            return { isActive: action.isActive }
        }
    }
    return state;
}
