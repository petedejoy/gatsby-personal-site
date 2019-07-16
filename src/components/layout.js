import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const layout = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default layout
