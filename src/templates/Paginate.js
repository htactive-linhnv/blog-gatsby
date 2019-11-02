import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
const Paginate = (props) => {
  const { isFirst, isLast, prevPage, nextPage, numPages, currentPage, path } = props
  return (
    <React.Fragment>
      {!isFirst && (
        <Button type='Primary'>
          <Link to={prevPage} rel='prev'>
                ← Previous Page
          </Link>
        </Button>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Button type='Primary'>
          {
            i + 1 === currentPage
              ? <Link key={`pagination-number${i + 1}`} style={{ color: 'blue' }} to={`${path}/${i === 0 ? '' : i + 1}`}>
                {' '}{i + 1} {' '}
              </Link>
              : <Link key={`pagination-number${i + 1}`} to={`${path}/${i === 0 ? '' : i + 1}`}>
                {' '}{i + 1} {' '}
              </Link>
          }
        </Button>
      ))}

      {!isLast && (
        <Button type='Primary'>
          <Link to={nextPage} rel='next'>
                Next Page →
          </Link>
        </Button>
      )}
    </React.Fragment>
  )
}

export default Paginate
