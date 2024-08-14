import { Link } from 'react-router-dom';

interface CategoryItemProps {
  name: string;
  path: string;
  img: string;
  alt: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, path, img, alt }) => (
  <li>
    <Link to={`/store/${path}`}>
      <img src={img} alt={alt} />
      {name}
    </Link>
  </li>
);

export default CategoryItem;
