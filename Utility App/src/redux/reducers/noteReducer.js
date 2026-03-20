import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "Revise core React concepts including components, props, state management, hooks like useState and useEffect, and understand component lifecycle for better application structure.",
      createdOn: new Date(),
    },
    {
      text: "Prepare detailed notes for Redux covering store, actions, reducers, dispatch flow, and middleware, along with practical examples for better understanding.",
      createdOn: new Date(),
    },
  ],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };
    case DELETE_NOTE:
      state.notes.splice(action.index, 1);
      //console.log(state.notes);
      return {
        ...state,
        notes: [...state.notes],
      };
    default:
      return state;
  }
}
