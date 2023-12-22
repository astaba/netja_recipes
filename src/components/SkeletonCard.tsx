import React from "react";

import { Skeleton } from "./ui/skeleton";
import * as card from "./ui/card";

const SkeletonCard = () => {
  return (
    <card.Index className="flex flex-col justify-between">
      <card.Header className="flex-row items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-6 flex-grow"/>
      </card.Header>
      <card.Content>
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-1/2 mt-4" />
      </card.Content>
      <card.Footer className="flex justify-between">
        <Skeleton className="h-10 w-28" />
      </card.Footer>
    </card.Index>
  );
};

export default SkeletonCard;
