let Sno=0;
export default function reducer(state=[],action){
    if(action.type=='bugAdded'){
        return[
            ...state,
            {
                id:++Sno,
                description:action.payload.description,
                resolved:false
            }
        ]
    }
    else if(action.type==='bugRemoved')
    return state.filter(bug=>bug.id!==action.payload.id)
    else if(action.type==='bugResolved')
    return state.map(
        bug=>bug.id!==action.payload.id 
        ? bug 
        :{...bug,resolved:"true"}
    )
    else
    return state;
}