import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Spinner.scss'

const Spinner = ({ color, className }) => (
  <svg className={classNames(styles.spinner, className)} viewBox="0 0 66 66">
    <circle
      className={styles.path}
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
      stroke={color}
    />
  </svg>
)

Spinner.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
}

Spinner.defaultProps = {
  color: '#fff',
  className: undefined
}

export default Spinner
