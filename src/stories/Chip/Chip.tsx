// External deps
import React, { MouseEventHandler } from 'react'

// Internal deps
import './Chip.scss'

interface ChipProps {
  label: string
  onClick?: any | null
  onDelete?: any | null
  size: 'small' | 'medium' | 'large'
  hover: boolean
  className: string
}

const Chip = ({ label, size, onClick = null, hover, className }: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={`chip ${size} ${onClick ? 'clickeable' : ''} ${
        hover ? 'hover' : ''
      } ${className}`}
    >
      <span>{label}</span>
    </div>
  )
}

export default Chip
