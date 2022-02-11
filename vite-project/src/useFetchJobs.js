import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'makeRequest',
    GET_DATA: 'getData',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: "update-has-next-page"
}

const BASE_URL = "http://localhost:3000/listings"

function parseLinkHeader( linkHeader ) {
    const linkHeadersArray = linkHeader.split( ", " ).map( header => header.split( "; " ) );
    const linkHeadersMap = linkHeadersArray.map( header => {
       const thisHeaderRel = header[1].replace( /"/g, "" ).replace( "rel=", "" );
       const thisHeaderUrl = header[0].slice( 1, -1 );
       return [ thisHeaderRel, thisHeaderUrl ]
    } );
    return Object.fromEntries( linkHeadersMap );
 }

let currentUrl = "http://localhost:3000/listings?_limit=20&_page=1"

 function paginate( direction ) {
    fetch( currentUrl ).then( response => {
       let linkHeaders = parseLinkHeader( response.headers.get( "Link" ) );
       if ( !!linkHeaders[ direction ] ) {
          currentUrl = linkHeaders[ direction ];
          fetchCounties( linkHeaders[ direction ] );
       }
    } );
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

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST})

        axios.get(currentUrl, {
            cancelToken: cancelToken1.token,
            params: { page: page, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
        })

        const cancelToken2 = axios.CancelToken.source()

        axios.get(currentUrl, {
            cancelToken: cancelToken2.token,
            params: { page: page + 1, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
        }) 

        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }
    }, [params, page])

    return state
}