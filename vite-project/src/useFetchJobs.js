import { useReducer, useEffect } from 'react'
import axios from 'axios'

/**
 * <http://localhost:3000/listings?_limit=20&_page=1>; rel="first",
 * <http://localhost:3000/listings?_limit=20&_page=1>; rel="prev",
 * <http://localhost:3000/listings?_limit=20&_page=3>; rel="next",
 * <http://localhost:3000/listings?_limit=20&_page=143>; rel="last"
 */

const ACTIONS = {
    MAKE_REQUEST: 'makeRequest',
    GET_DATA: 'getData',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: "update-has-next-page"
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs:[] }
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return {...state, hasNextPage: action.payload.hasNextPage}
        default:
            return state
    }
}

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})
    const BASE_URL = `http://localhost:3001/api/jobs?_limit=10&_page=${page}`
    const baseUrl = '/api/jobs'



    // useEffect(() => {
    //     const cancelToken1 = axios.CancelToken.source()
    //     dispatch({ type: ACTIONS.MAKE_REQUEST})

    //     axios.get(baseUrl, {
    //         cancelToken: cancelToken1.token,
    //         params: { page: page, ...params }
    //     }).then(res => {
    //         dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
    //     }).catch(e => {
    //         if (axios.isCancel(e)) return
    //         dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
    //     })

    //     const cancelToken2 = axios.CancelToken.source()

    //     axios.get(baseUrl, {
    //         cancelToken: cancelToken2.token,
    //         params: { page: page + 1, ...params }
    //     }).then(res => {
    //         dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } })
    //     }).catch(e => {
    //         if (axios.isCancel(e)) return
    //         dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
    //     }) 

    //     return () => {
    //         cancelToken1.cancel()
    //         cancelToken2.cancel()
    //     }
    // }, [params, page])

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST})

        axios.get(baseUrl, {
            cancelToken: cancelToken1.token,
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
        })

        return () => {
            cancelToken1.cancel()
        }
    }, [params])

    return state
}