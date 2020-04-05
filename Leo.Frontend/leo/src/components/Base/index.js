import React from 'react'
import { connect } from 'react-redux'

const Base = props => {
    return (    
            <props.BaseContent.layout data={props.BaseContent.data}/>
        )
}

export default connect(
    state => ({
        BaseContent: state.BaseContent
    }),
    dispatch => ({

    })
)(Base)