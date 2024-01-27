import { Icon } from '@iconify/react'
import React from 'react'

const Step = (props) => {
    const { data } = props
    return (
        <div className='flex items-center gap-4 lg:text-lg text-xs'>
            <Icon icon="material-symbols:home" />
            <p>Home</p>
            <Icon icon="icon-park-outline:right" />
            <p>Foods</p>
            {data.map((item, i, row) =>
                <>
                    <Icon  icon="icon-park-outline:right" />
                    <p className={`${i + 1 === row.length && 'text-gray-600/40 font-semibold'}`}>{item}</p>
                </>
            )}
        </div>
    )
}

export default Step