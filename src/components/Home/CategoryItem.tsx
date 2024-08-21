import { Link } from 'react-router-dom';

interface CategoryItemProps {
  name: string;
  path: string;
  img: string;
  alt: string;
  avif: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, path, img, alt, avif }) => (
  <li>
    <Link to={`/store/${path}`}>
      <picture>
        <source srcSet={avif} type="image/webp" />
        <img src={img} alt={alt} />
      </picture>
      {name}
    </Link>
  </li>
);

export default CategoryItem;
