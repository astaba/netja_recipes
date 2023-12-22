import * as card from "@/components/ui/card";
import * as avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <card.Index key={recipe.id} className="flex flex-col justify-between">
            <card.Header className="flex-row items-center gap-4">
              <avatar.Index>
                <avatar.Image
                  src={`img/${recipe.image}`}
                  alt={`recipe of ${recipe.title}`}
                />
                <avatar.Fallback>
                  {recipe.title.slice(0, 2)}
                </avatar.Fallback>
              </avatar.Index>
              <div>
                <card.Title>{recipe.title}</card.Title>
                <card.Description>{recipe.time} mins to cook.</card.Description>
              </div>
            </card.Header>
            <card.Content>
              <p>{recipe.description}</p>
            </card.Content>
            <card.Footer className="flex justify-between">
              <Button size="sm">
                View Recipe
              </Button>
              {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </card.Footer>
          </card.Index>
        ))}
      </div>
    </main>
  );
}
