import React, { useState, useRef } from 'react';
import './App.css';
import { list } from './Data/list';

function App() {
  const [categories, setCategories] = useState(list);
  const newCategoryInput = useRef(null);

  const handleAddCategory = () => {
    const newCategoryTitle = prompt('Enter the Category title:');
    if (newCategoryTitle) {
      const newCategory = {
        title: newCategoryTitle,
        subcategory: []
      };

      setCategories([...categories, newCategory]);
      newCategoryInput.current.value = '';
    }
  };

  const handleAddSubcategory = (categoryIndex) => {
    const subcategoryTitle = prompt('Enter the subcategory title:');
    if (subcategoryTitle) {
      const updatedCategories = [...categories];
      updatedCategories[categoryIndex].subcategory.push({
        title: subcategoryTitle,
        items: [],
      });
      setCategories(updatedCategories);
    }
  };

  const handleAddItem = (categoryIndex, subcategoryIndex) => {
    const itemTitle = prompt('Enter the item title:');
    if (itemTitle) {
      const updatedCategories = [...categories];
      updatedCategories[categoryIndex].subcategory[subcategoryIndex].items.push({
        title: itemTitle,
      });
      setCategories(updatedCategories);
    }
  };

  const handleDeleteItem = (categoryIndex, subcategoryIndex, itemIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategory[subcategoryIndex].items.splice(itemIndex, 1);
    setCategories(updatedCategories);
  };

  return (
    <div className="App">
      <ul className='category'>
        {categories.map((category, categoryIndex) => (
          <li className='category-item' key={categoryIndex}>
            {category.title}
            <ul className='subcategory'>
              {category.subcategory && category.subcategory.map((subcategoryItem, subcategoryIndex) => (
                <li className='subcategory-item' key={subcategoryIndex}>
                  {subcategoryItem.title}
                  <ul className='items'>
                    {subcategoryItem.items && subcategoryItem.items.map((item, itemIndex) => (
                      <li className='items-item' key={itemIndex}>
                        {item.title}
                        <button onClick={() => handleDeleteItem(categoryIndex, subcategoryIndex, itemIndex)}>Delete</button>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleAddItem(categoryIndex, subcategoryIndex)}>+</button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddSubcategory(categoryIndex)}>+</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddCategory}>+</button>
    </div>
  );
}

export default App;


