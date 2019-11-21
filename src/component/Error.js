
import React from 'react';
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="error-wrapper">
            <h1 className='error-title'>404</h1>
            <p className="error-subtitle">PAGE NOT FOUND</p>
            <Link className="error-btn" to='/'>Go Home</Link>

        </div>
    );
}
