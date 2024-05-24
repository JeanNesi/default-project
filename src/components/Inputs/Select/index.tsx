// LIBS
import { forwardRef, ForwardRefRenderFunction } from 'react'
// TYPES
import { ISelect } from './types'
// COMPONENTS
import { SelectContainer } from './styles'

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, ISelect> = (
  { label, name, ...rest },
  ref
) => (
  <SelectContainer>
    {label && <h6>{label}</h6>}
    <select id={name} name={name} ref={ref} {...rest} />
  </SelectContainer>
)
export const Select = forwardRef(SelectBase)
