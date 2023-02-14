const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
        },
      ];
    
    case "DELETE":
      return state.filter(el => el.id !==action.payload)
    
      case "COMPLATED":
        return state.map((element) => {
            if (element.id === action.payload) {
            return{
              ...element,
              complated: !element.complated
            }
          }
          return element
        })
      default: {
      return state;
    }
  }
};

export default reducer;
