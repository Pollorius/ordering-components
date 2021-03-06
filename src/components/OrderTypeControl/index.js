import React from 'react'
import PropTypes, { number } from 'prop-types'
import { useOrder, ORDER_ACTIONS } from '../../contexts/OrderContext'

export const OrderTypeControl = (props) => {
  const {
    UIComponent
  } = props
  const [{ order }, dispatchOrder] = useOrder()

  const handleChangeOrderType = (orderType) => {
    dispatchOrder({
      type: ORDER_ACTIONS.CHANGE_TYPE,
      orderType
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={order}
          handleChangeOrderType={props.handleChangeOrderType || handleChangeOrderType}
        />
      )}
    </>
  )
}

OrderTypeControl.propTypes = {
  /**
   * Order availables to the control
   */
  orderTypes: PropTypes.arrayOf(number),
  /**
   * Custom function to control order type changes
   */
  handleChangeOrderType: PropTypes.func,
  /**
   * Components types before order type control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order type control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order type control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order type control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderTypeControl.defaultProps = {
  orderTypes: [1, 2, 3, 4, 5]
}
