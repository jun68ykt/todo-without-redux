import React from 'react'
import Link from '../components/Link'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    {/* TODO: 後で以下のactiveとonClickを修正 */}
    <Link filter={VisibilityFilters.SHOW_ALL} active={false} onClick={()=> {}}>All</Link>
    <Link filter={VisibilityFilters.SHOW_ACTIVE } active={false} onClick={()=> {}}>Active</Link>
    <Link filter={VisibilityFilters.SHOW_COMPLETED} active={false} onClick={()=> {}}>Completed</Link>
  </div>
)

export default Footer
