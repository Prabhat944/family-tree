import DummyData from "../../components/DummyData/DummyData";

export const familyReducer=(state={family:DummyData,status:false},action)=>{
    switch (action.type){
        case 'ChangeAge':
            return {...state}
        case 'UpdateState':
            return {...state,state:action.payload}
        default:
            return state;
    }
}