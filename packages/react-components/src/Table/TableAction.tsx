import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: inline-block;
  height: 12px;
  background: ${(props) => props.theme.colors.phala};
  margin: 0px 0px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-decoration-line: underline;
  color: #202020;
  padding: 0 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }
`

const TableAction: React.FC = (props) => {
  const {children} = props

  return <Styles>{children}</Styles>
}

export default TableAction
