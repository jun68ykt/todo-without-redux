import React from 'react'
import Link from '../components/Link'
import { VisibilityFilters } from '../util'

const buttonText = filter => {
  let text = filter.replace(/^SHOW_/,'')
  return `${text[0]}${text.substring(1).toLowerCase()}`
}

const Footer = ({ selectedFilter, onChangeFilter }) => (
  <div>
    <span>Show: </span>
    {[
       VisibilityFilters.SHOW_ALL,
       VisibilityFilters.SHOW_ACTIVE,
       VisibilityFilters.SHOW_COMPLETED
     ].map(filter =>
      <Link
        key={filter}
        active={selectedFilter === filter}
        onClick={()=> { onChangeFilter(filter) }}
      >
        {buttonText(filter)}
      </Link>
    )}
  </div>
)

export default Footer
