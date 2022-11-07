import { ChangeEventHandler } from 'react'
import './Input.scss'

interface InputProps {
  placeholder: string
  label: string
  className: string
  value: number | string
  size: 'small' | 'medium' | 'large'
  onChange: ChangeEventHandler
  widthButton: string
  hoverEffect: boolean
}

const Input = ({
  className,
  value,
  size,
  onChange,
  label,
  widthButton,
  hoverEffect,
}: InputProps) => {
  return (
    <div className={`input ${className} ${size} ${hoverEffect ? 'hover' : ''}`}>
      {label && <label>{label}</label>}
      <input
        value={value}
        className={`${size}`}
        onChange={onChange}
        style={{
          width: widthButton || 'auto',
        }}
      />
    </div>
  )
}

export default Input
