import PropTypes from 'prop-types'

function Button({children, type, version, isDisabled}) {
  return <button disabled={isDisabled} type ={type} className={`btn btn-${version}`}>{children} </button> 

}
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled:PropTypes.bool,
    type: PropTypes.string,
    version: PropTypes.string
}
export default Button
