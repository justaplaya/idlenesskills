import {DownloadTodosAction} from "./reducer"

const DownloadTodosActionFile = () => {
    return async function(dispatch) {
        fetch(`http://localhost:5000/todos`)
        .then(response => response.json()) 
        .then(json=>dispatch(DownloadTodosAction(json)))

    }
}

export default DownloadTodosActionFile