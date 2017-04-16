const initialState = {
    items : []
};

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FIGURE': {
            return { items : [...state.items, action.item] }
        }
        case 'DELETE_FIGURE': {
            state.items.splice(action.id, 1)
            return { items : [...state.items] }
        }
    }
    return state;
}
