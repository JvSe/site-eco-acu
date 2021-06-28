export default function themeTitleReducers( state = {type: 'gestao', colorStart: '#D8A72C', colorEnd: '#f4e6c2'} , actions) {
    switch (actions.type) {
        case "THEME_GESTAO":
            return state = {type:'gestao', colorStart: '#D8A72C', colorEnd: '#f4e6c2'}
        case "THEME_TURISMO":
            return state = {type:'turismo', colorStart: '#2d3a6a', colorEnd: '#3b57c2'}
        default:
            return state;
    };
}