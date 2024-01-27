"use client"
import { axiosTemplate } from "@/utils/axios";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import ListCard from "@/components/molecule/ListCard";
import SearchInput from "@/components/atoms/SearchInput";



export default function Home() {
  const [listFoodMenu, setListFoodMenu] = useState([])
  const [listFoodMenuSearch, setListFoodMenuSearch] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)


  const getListFoodAPI = async () => {
    try {
      const response = await axiosTemplate('list.php?i=list')
      setListFoodMenu(response.data.meals)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const searchFoodMenuAPI = async () => {
      const listFood = await Promise.all(listFoodMenu.filter((item) => {
        return item.strIngredient.toLowerCase().includes(search.toLowerCase())
      })
      )
      setListFoodMenuSearch(listFood)
      setLoading(false)
  }


  useEffect(() => {
    getListFoodAPI()
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      searchFoodMenuAPI()
    }, 1000);
  },[search])


  return (
    <main className="flex flex-col items-center px-24 pt-20">
      <div className="flex gap-1 text-red-600 mt-10">
        <Icon icon="bxs:bowl-hot" />
        <Icon icon="mdi:rice" />
        <Icon icon="fluent:cookies-20-filled" />
      </div>
      <p className="text-sm font-semibold my-8">mealapp API website</p>
      <h1 className=" lg:text-3xl text-xl font-bold">See All The Delicious Foods</h1>
      <SearchInput onSearch={(e) => setSearch(e.target.value)} placeholder="Search Ingridients" loading={true} />
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
                  <ListCard data={listFoodMenuSearch} />
                  :
                  <ListCard data={listFoodMenu} />
              }
            </div>
        }
      </section>
    </main>
  );
}
