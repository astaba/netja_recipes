import React from "react";

import * as card from "./ui/card";
import * as avatar from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Recipe } from "@/app/page";

type CardProps = {
  recipe: Recipe;
};

const Card: React.FC<CardProps> = ({ recipe }) => {
  return (
    <card.Index key={recipe.id} className="flex flex-col justify-between">
      <card.Header className="flex-row items-center gap-4">
        <avatar.Index>
          <avatar.Image
            src={`img/${recipe.image}`}
            alt={`recipe of ${recipe.title}`}
          />
          <avatar.Fallback>{recipe.title.slice(0, 2)}</avatar.Fallback>
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
        <Button size="sm">View Recipe</Button>
        {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
      </card.Footer>
    </card.Index>
  );
};

export default Card;
