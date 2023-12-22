import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Recipe</button>
              {recipe.vegan && <p className="mt-0">Vegan!</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
