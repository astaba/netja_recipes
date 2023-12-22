import Card from "@/components/Card";

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

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
