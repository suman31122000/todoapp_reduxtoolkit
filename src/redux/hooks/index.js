import {useDispatch,useSelector} from 'react-redux';

export const tododispatch=()=> useDispatch();
export const todoselector=(event)=> useSelector(event);
