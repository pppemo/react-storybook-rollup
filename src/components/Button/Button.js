import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Spinner from './../Spinner'
import styles from './Button.scss'

export const COLORS = {
  RED: 'Red',
  GRAY: 'Gold',
  BLACK: 'Gray',
  CHAMBRAY: 'Black',
  ORANGE_TANGO: 'Blue',
  BABY_BLUE: 'White'
}

class Button extends Component {
  static propTypes = {
    color: PropTypes.string,
    isLoading: PropTypes.bool,
    fillWidth: PropTypes.bool,
    /** Has no impact if `noFill` and `noOutline` are set to `true` */
    roundish: PropTypes.bool,
    noFill: PropTypes.bool,
    /** Has impact only if `noFill` is `true` */
    noOutline: PropTypes.bool,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    color: 'Gray',
    isLoading: false,
    fillWidth: false,
    roundish: false,
    noFill: false,
    noOutline: false,
    disabled: false
  }

  getColorStyleForButton = () => styles[`button${this.props.color}`]

  handleClick = () => {
    const { disabled, isLoading } = this.props
    if (disabled || isLoading) {
      return
    }

    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const {
      className,
      children,
      isLoading,
      fillWidth,
      roundish,
      noFill,
      noOutline,
      color, // do not remove, unused, but extracts from otherProps
      ...otherProps
    } = this.props

    return (
      <button
        {...otherProps}
        onClick={this.handleClick}
        className={classNames(
          styles.container,
          this.getColorStyleForButton(),
          className,
          {
            [styles.fillWidth]: fillWidth,
            [styles.roundish]: roundish,
            [styles.noFill]: noFill,
            [styles.noOutline]: noOutline
          })}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    )
  }
}

export default Button
