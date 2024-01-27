"use client"
import { axiosTemplate } from "@/utils/axios";
import { useEffect, useState } from "react";
import Step from "@/components/atoms/Step";
import { useParams } from "next/navigation";
import Instructions from "@/components/atoms/Instructions";
import ImageReceipts from "@/components/atoms/ImageReceipts";
import Recipes from "@/components/atoms/Recipes";
import VideoRecipes from "@/components/atoms/VideoRecipes";

const Detail = () => {
  const [DetailFoodMenu, setDetailFoodMenu] = useState()
  const [RecipesData, setRecipesData] = useState([])
  const params = useParams()



  const getDetailFoodAPI = async () => {
    try {
      const response = await axiosTemplate(`lookup.php?i=${params.id}`)
      setDetailFoodMenu(response.data.meals[0])
      for (let i = 1; i <= 20; i++) {
        if (RecipesData.length === 20) {
          break;
        }
        setRecipesData(old => [...old, { ingredient: response.data.meals[0][`strIngredient${i}`], measure: response.data.meals[0][`strMeasure${i}`] }])
        console.log(i);
      }
      // strIngredient1
      // strMeasure1
      // const recipes = await Promise.all(response.data.meals.map((item) => ))
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getDetailFoodAPI()
  }, [])



  useEffect(() => {
    console.log(DetailFoodMenu);
    console.log(RecipesData);
  }, [RecipesData])



  return (
    <main className="flex flex-col items-center px-24 pt-20">
      <div className="w-full lg:px-10">
        <Step data={[params.ingredient.split('%20')?.join(' '), DetailFoodMenu?.strMeal]} />
      </div>
      <div className="w-full my-11">
        <h1 className="text-3xl">{DetailFoodMenu?.strMeal}</h1>
      </div>
      <div className="w-full">
        <p className="text-red-500">{DetailFoodMenu?.strArea} culinary</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mb-20">
        <ImageReceipts link={DetailFoodMenu?.strMealThumb} />
        <div>
          <Instructions text={DetailFoodMenu?.strInstructions} />
          <Recipes text={DetailFoodMenu?.strInstructions} data={RecipesData} />
        </div>
      </div>
        <div className="w-full">
          <VideoRecipes video={DetailFoodMenu?.strYoutube}/>
        </div>
      {/* {DetailFoodMenu} */}
    </main>
  );
}

export default Detail