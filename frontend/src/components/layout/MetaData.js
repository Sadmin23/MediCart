import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - MediCart`}</title>
        </Helmet>
    )
}

export default MetaData