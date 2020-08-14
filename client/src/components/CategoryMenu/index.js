import React, { useEffect } from "react";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContainer, useStoreContext } from "../../utils/GlobalState";
import { QueryData } from "@apollo/react-hooks/lib/data/QueryData";

function CategoryMenu({ setCategory }) {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            setCategory(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
