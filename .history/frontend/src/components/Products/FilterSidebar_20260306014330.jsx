import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return <div>FilterSidebar</div>;
};

export default FilterSidebar;
