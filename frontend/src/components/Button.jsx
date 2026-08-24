import './Button.css'

export default function Button({ text, type = "submit", onClick, variant = "primary", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-custom btn-${variant} ${className}`}
    >
      {text}
    </button>
  )
}



