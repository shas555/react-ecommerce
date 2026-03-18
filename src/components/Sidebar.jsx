// src/components/Sidebar.jsx
import { useEffect, useState } from "react";

const Sidebar = ({ onSelectCategory, activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-3 text-muted">Loading...</div>;

  return (
    <aside className="bg-light p-3 rounded shadow-sm">
      <h5 className="fw-bold mb-3">Categories</h5>
      <ul className="list-group list-group-flush">
        {/* Option to reset filter */}
        <li 
          className={`list-group-item bg-transparent ${!activeCategory ? 'fw-bold text-primary' : ''}`}
          style={{ cursor: 'pointer' }}
          onClick={() => onSelectCategory(null)}
        >
          All Products
        </li>
        {categories.map((category, index) => (
          <li 
            key={index} 
            className={`list-group-item bg-transparent text-capitalize ${activeCategory === category ? 'fw-bold text-primary' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;