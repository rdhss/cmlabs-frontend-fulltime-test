import React from 'react'
import Card from '../atoms/Card'
import { useParams, useRouter } from 'next/navigation'

const ListCard = (props) => {
  const { data, cube } = props
  const params = useParams()
  const router = useRouter()
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-20">
      {data?.length === 0 ?
        <div className='flex justify-center col-span-4'>
          <h1 className=''>No Ingredient available</h1>
        </div>
        :
        <>
          {data?.map((item, index) =>
          <div key={index}>
            <Card click={() => router.push(`${item.strIngredient ? item.strIngredient : `${params.ingredient?.split('%20')?.join(' ')}/${item.idMeal}` }`)} cube={cube} id={item.idIngredient} title={item.strIngredient || item.strMeal} thumb={item.strMealThumb}/>
          </div>
          )}
        </>
      }
    </div>
  )
}

export default ListCard