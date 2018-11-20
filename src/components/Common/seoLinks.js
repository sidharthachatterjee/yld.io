import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PagePaths from '../pagePaths'

const Span = styled.span`
  text-decoration: none;
  white-space: pre;
`

const ItemSpan = styled.span`
  display: inline-block;
`

export default function SeoLinks ({ items }) {
  return <PagePaths render={(pathsById) => (
    <Fragment>
      {(items || []).map((item, i) => {
        const last = i + 1 === items.length
        const path = pathsById[item.id]
        console.log(items)
        if (path) {
          return (
            <ItemSpan>
              <Link key={item.id} to={path} style={{ textDecoration: 'underline' }}>
                {item.title}
              </Link>
              <Span>{last ? '' : ' /'} </Span>
            </ItemSpan>
          )
        }

        return (
          <ItemSpan key={item.id}>
            {item.title} <Span key={item.id}>{last ? '' : '/ '}</Span>
          </ItemSpan>
        )
      })}
    </Fragment>
  )} />
}
