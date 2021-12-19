const initialState = [
    { id: 0, name: "Mustafizur Rahman", email: "mustafiz@email.com", phone: 1234567890 },
    { id: 1, name: "Rahman2", email: "rahman@gmail.com", phone: 4567891230 },
];

export const InformationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INFORMATION":
            state = [...state, action.payload];
            return state;
        case "DELETE_INFORMATION":
            const informationFilter = state.filter((information) =>
                information.id === action.payload ? null : information
            );
            state = informationFilter;
            return state;
        case "UPDATE_INFORMATION":
            const informationUpdate = state.filter((information) =>
                information.id === action.payload.id
                    ? Object.assign(information, action.payload)
                    : information
            );
            state = informationUpdate;
            return state;
        case "RESET_INFORMATION":
            state = [{ name: null, email: null, phone: null }];
            return state;
        default:
            return state;
    }
};