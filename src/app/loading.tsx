import React from "react";

import SkeletonCard from "@/components/SkeletonCard";

const loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default loading;
