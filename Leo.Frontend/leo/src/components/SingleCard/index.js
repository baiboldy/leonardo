import React, { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {baseUrl} from '../../store/actions/api'

const SingleCard = props => {
    const {
        car
    } = props.data
    
    const [index, setIndex] = useState(0)

    const onOtherImgClick = (ind) => {
        setIndex(ind)
    }

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
                <div className={classNames('car-img')}>
                    {car.img.length > 0  && <img src={baseUrl.name + car.img[index].path} alt={car.img[index].path}/>}
                </div>
                <div className={classNames('car-img-other')}>
                    {car.img.length > 0 && car.img.reduce((acc, cur, idx) => {
                        if (idx > 0){
                            return [...acc, <img key={idx} src={baseUrl.name + cur.path} alt={cur.path} onClick={() => onOtherImgClick(idx) }/>]
                        }
                        return acc
                    },[]
                    )}
            </div>
        </div>
    </div>)
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(SingleCard)