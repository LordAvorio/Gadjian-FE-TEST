import Axios from 'axios'

export const getEmployee = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get('https://randomuser.me/api/?results=28')

            dispatch({
                type: 'GET_EMPLOYEE',
                payload: res.data.results
            })

        }
        catch(err){
            console.log(err)
        }
    }
}