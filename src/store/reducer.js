export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: "BQDI9JTvX_rDpIOq7vF3C37_dBsT5jWnKrFmBxc9x3v47IKQdLcROkTD81LZ2AcVJl6hXiTE5imdUBo--UclfUNrMtSMG-WNQxg24pcNyon_KuiRzmtTpPZdrp1XmdxUCb_lxUH4QdS7u67jbEfYdgyoBxyHsaLo3g",
}

const reducer = (state, action) => {
console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token
        }
    default:
      return state;
  }
}

export default reducer;