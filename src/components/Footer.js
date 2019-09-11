import React from 'react'
import Link from '../components/Link'
import { VisibilityFilters } from '../util'

const Footer = ({ selectedFilter, onChangeFilter }) => (
  <div>
    <span>Show: </span>
    <Link
      active={selectedFilter === VisibilityFilters.SHOW_ALL}
      onClick={()=> { onChangeFilter(VisibilityFilters.SHOW_ALL) }}
    >
      All
    </Link>
    <Link
      active={selectedFilter === VisibilityFilters.SHOW_ACTIVE}
      onClick={()=> { onChangeFilter(VisibilityFilters.SHOW_ACTIVE) }}
    >
      Active
    </Link>
    <Link
      active={selectedFilter === VisibilityFilters.SHOW_COMPLETED}
      onClick={()=> { onChangeFilter(VisibilityFilters.SHOW_COMPLETED) }}
    >
      Completed
    </Link>
  </div>
)

export default Footer
