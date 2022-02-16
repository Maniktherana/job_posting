import React from 'react'
// import { Pagination } from 'react-bootstrap'
import { NextUIProvider, createTheme, Pagination } from '@nextui-org/react'

export default function JobsPagination({ page, setPage, hasNextPage }) {

    const darkTheme = createTheme({
        type: "dark",
        theme: {
          colors: {}
        }
      })

    function adjustPage(amount) {
        setPage(amount)
    }

  return (
        <NextUIProvider theme={darkTheme}>
            <Pagination total={143} siblings={1} initialPage={1} page={page} onChange={(page) => adjustPage(page)} shadow bordered />
        </NextUIProvider>
  )
}

/**
 *          <Pagination>
                {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
                {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
                {page > 2 && <Pagination.Ellipsis />}
                {page > 2 && <Pagination.Item  onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
                <Pagination.Item active>{page}</Pagination.Item>
                {hasNextPage && <Pagination.Item  onClick={() => adjustPage(1)}>{page  +1}</Pagination.Item>}
                {hasNextPage && <Pagination.Next  onClick={() => adjustPage(1)}/>}
            </Pagination>
 */
