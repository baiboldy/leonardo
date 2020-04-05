import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {asyncGetCars} from '../../store/actions/cars'

import Card from '../Card'

const Content = props => {
    useEffect(() => {
        props.onLoad()
    }, [])
    return (
        <div className={classNames('content')}>
            {props.cars.length > 0 && props.cars.map((car, idx) => 
                <Card key={idx} car={car}/>
                )}
        </div>
    )
}

export default connect(
    state => ({
        cars: state.cars
    }),
    dispatch => ({
        onLoad: () => dispatch(asyncGetCars()),
    })
)(Content)