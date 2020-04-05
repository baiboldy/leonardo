import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const SingleCard = props => {
    const {
        car
    } = props.data
    return (
    <div className={classNames('singlcard')}>
        <div className={classNames('card-info')}>
            <div className={classNames('row')}>
                <div className={classNames('col')}>name</div>
                <div className={classNames('col')}>{car['name']}</div>
            </div>
            <div className={classNames('row')}>
                <div className={classNames('col')}>price</div>
                <div className={classNames('col')}>{car['price']}</div>
            </div>
        </div>
        <div className={classNames('card-img')}>

        </div>
    </div>)
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(SingleCard)