import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {changeContent} from '../../store/actions/baseContent'

const Header = (props) => {

    return (
        <div className={classNames('header')}>
            {props.tabs.map((i, idx) => 
                <div key={idx} className={classNames('tab')} onClick={() => props.onChangeContent(i.component)}>
                    <div className={classNames('tabName')}>{i.name}</div>
                </div>
                )}
        </div>
    )
}

export default connect(
    state => ({
        tabs: state.Tab,
    }),
    dispatch => ({
        onChangeContent: (component) => dispatch(changeContent(component))
    })
)(Header)