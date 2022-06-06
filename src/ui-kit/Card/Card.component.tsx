import { ReactNode } from 'react'
import { StyledCard } from './Card.styles'

interface CardProps {
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const { children } = props

  return <StyledCard>{children}</StyledCard>
}
