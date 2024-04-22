const Alert = ({message, className}) => {
  return (
    <div className={`alert ${ className }`} role="alert">
        { message }
    </div>
  )
}

export default Alert