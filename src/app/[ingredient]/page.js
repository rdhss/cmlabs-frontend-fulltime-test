"use client"
import { axiosTemplate } from "@/utils/axios";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import ListCard from "@/components/molecule/ListCard";
import SearchInput from "@/components/atoms/SearchInput";
import Step from "@/components/atoms/Step";
import { useParams } from "next/navigation";

const Foods = () => {
  const [listMealsMenu, setListMealsMenu] = useState([])
  const [listMealsMenuSearch, setListMealsMenuSearch] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const params = useParams()

  const getListMealsAPI = async () => {
    try {
      const response = await axiosTemplate(`filter.php?i=${params.ingredient.split('%20').join(' ')}`)
      setListMealsMenu(response.data.meals)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const searchMealsMenuAPI = async () => {
    const listMeals = await Promise.all(listMealsMenu.filter((item) => {
      return item.strMeal.toLowerCase().includes(search.toLowerCase())
    })
    )
    setListMealsMenuSearch(listMeals)
    setLoading(false)
  }

  useEffect(() => {
    getListMealsAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      searchMealsMenuAPI()
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])


  return (
    <main className="flex flex-col items-center px-24 pt-20">
      <div className="w-full lg:px-10">
        <Step data={[params.ingredient.split('%20').join(' ')]} />
      </div>
      <div className="w-full lg:px-10 mt-10">
        <h1 className="font-semibold text-3xl">{params.ingredient.split('%20').join(' ')}</h1>
      </div>
      <SearchInput onSearch={(e) => setSearch(e.target.value)} placeholder="Search Foods" loading={true} />
      <section>
        {
          loading ?
            <div>
              <Icon icon="quill:loading-spin" className="animate-spin text-blue-600" width={40} />
            </div>
            :
            <div>
              {
                search !== '' ?
                  <ListCard cube data={listMealsMenuSearch} />
                  :
                  <ListCard cube data={listMealsMenu} />
              }
            </div>
        }
      </section>
    </main>
  );
}

export default Foods