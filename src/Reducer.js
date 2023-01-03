export const initialState = {
    user: null,
    Playing: false,
    playlists: [],
    item: null
};

export const reducer = (state, action) => {
    console.log(action);

    switch (action.key) {
        case "SET_USER":
            return{
            ...state,
            user:action.user
        }


        default:
            return state;

    }

}