import React from 'react'

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
    color?: 'primary' | 'secondary';
}

const Buttons = ({children, onClick, color = 'secondary'}: Props) => {
  return (
    <button onClick={onClick} className={'btn btn-' + color}>
        {children}
    </button>
  )
}

export default Buttons