import './App.css';
import { list } from './Data/list';

function App() {
  return (
    <div className="App">
      <ul className='category'>
        {list.map((category) => (
          <li className='category-item'>{category.title}
            <ul className='subcategory'>
              {category.subcategory && category.subcategory.map((subcategoryItem) => (
                <li className='subcategory-item'>
                  {subcategoryItem.title}
                  <ul className='items'>
                    {subcategoryItem.items && subcategoryItem.items.map((item) => (
                      <li className='items-item'>{item.title}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default App;
