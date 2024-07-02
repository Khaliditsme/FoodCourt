import RestaurantItemCategory from "../RestaurantCtegory/RestaurantItemCategory";
import "../../css/ResataurantNestedItemCategories.css";
const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  return (
    <div>
        {
            nestedCategory.categories.map((category, index) => (
                <div className="nested-item-categories" key={index}>
                    <RestaurantItemCategory itemCategory={category} />
                </div>
            ))
        }
    </div>
  );
};

export default RestaurantNestedItemCategory;
