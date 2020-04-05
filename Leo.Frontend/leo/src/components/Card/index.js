import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {baseUrl} from '../../store/actions/api'
import {changeContentByCardId} from '../../store/actions/baseContent'

const Card = props => {
    const {
        changeContentByCardId,
        car
    } = props

    return (
        <div className={classNames('card')} onClick={() => changeContentByCardId(car)}>
            <div className={classNames('car-name')}>

            </div>
            <div className={classNames('car-img')}>
                {props.car.img.length > 0  && <img src={baseUrl.name + props.car.img[0].path} alt={props.car.img[0].path}/>}
            </div>
            <div className={classNames('car-img-other')}>
                {props.car.img.length > 0 && props.car.img.reduce((acc, cur, idx) => {
                    if (idx > 0 && idx <=4){
                        return [...acc, <img key={idx} src={baseUrl.name + cur.path} alt={cur.path}/>]
                    }
                    return acc
                },[]
                )}
            </div>
        </div>
    )
}

export default connect(
    state => ({

    }),
    dispatch => ({
        changeContentByCardId: (car) => {
            dispatch(changeContentByCardId(car))
        }
    })
)(Card)