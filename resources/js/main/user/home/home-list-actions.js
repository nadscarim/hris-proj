import axios from "axios"

export const setModuleState = (payload) => async (dispatch) => {
    dispatch({
        type: 'SET_HOME_STATE',
        payload
    })
}

export const toggleModal = () => async (dispatch) => {
    
    
    dispatch({
        type: 'SET_HOME_STATE',
        payload
    })
}

// export const getTasks = () => async (dispatch) => {
//     const response = await axios.post('/home/get')

//     const {
//         tasks
//     } = response.data

//     console.log(tasks)

//     dispatch({
//         type: 'SET_HOME_STATE',
//         payload: {
//             data: {
//                 list: tasks,
//                 pages: 0
//             }
//         }
//     })
// }

// export const toggleModal = (params) => async (dispatch) => {
//     let modal = params
//     const {
//         status,
//         data
//     } = modal

//     if (modal.status === 'edit') {
//         const form = {
//             id: data.id,
//             task_title: data.task_title,
//             comment: data.comment
//         }

//         modal.data = {
//             ...form
//         }
//     }

//     dispatch({
//         type: 'SET_HOME_STATE',
//         payload: {
//             modal: {
//                 ...modal
//             }
//         }
//     })
// }


