import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const AddCar = props => {
    const onSubmitHandle = event => {
        event.preventDefault()
        const fd = new FormData()
        fd.append('ImageFile', event.target[3].files[0], event.target[3].files[0].name)
        fd.append('path', 'mark')
        fd.append('carId', 5555)
        axios.post('https://localhost:44375/api/Imgs', 
        {
            'imageFile': event.target[3].files[0],
            'path': '/img/mark2.jpg',
            carId: 1
        }
        , 
        {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(resp => {
            debugger;
        })
    }
    return (
        <div>
            <form method='post' onSubmit={(event)=>onSubmitHandle(event)}>
                <label for='name'>Name: </label>
                <input name='name' type='text'/>

                <label for='price'>Price: </label>
                <input name='price' type='numeric'/>

                <label for='desc'>Description: </label>
                <input name='desc' type='text'/>

                <label for='files'>Files: </label>
                <input name='desc' type='file' multiple/>
                
                <button 
                type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(AddCar)