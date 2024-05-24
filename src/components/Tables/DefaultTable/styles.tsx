import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Background = styled.div`
  max-width: 100%;
  overflow-x: auto;
`

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 ${theme.size.xxsm};
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableRowHead = styled.tr``

export const TableRow = styled.tr<{ $bgColor?: string }>`
  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor};`};
`

export const TableColHeader = styled.th<{ $cssProps: any; $cssOnMedia: any }>`
  color: ${theme.color.gray4};
  text-align: start;
  white-space: nowrap;
  padding: 0 ${theme.size.sm};

  ${({ $cssProps }) => $cssProps}

  @media (max-width: 900px) {
    ${({ $cssOnMedia }) => $cssOnMedia}
  }
`

export const TableColBody = styled.td<{
  $cssProps: any
  $cssOnMedia: any
}>`
  height: ${theme.size.xxlg};
  text-align: start;

  padding: 0 ${theme.size.sm};

  &:first-of-type {
    border-radius: ${theme.size.xxsm} 0px 0px ${theme.size.xxsm};
  }

  &:last-of-type {
    border-radius: 0px ${theme.size.xxsm} ${theme.size.xxsm} 0px;
  }

  ${({ $cssProps }) => $cssProps}

  @media (max-width: 900px) {
    min-width: 150px;
    ${({ $cssOnMedia }) => $cssOnMedia}
  }
`
