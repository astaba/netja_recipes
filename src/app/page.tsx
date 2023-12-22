export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

const getRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch("http://localhost:4000/recipes");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};

export default async function Home() {
  const recipes = await getRecipes();
  console.log(recipes);
  return <main>home</main>;
}
