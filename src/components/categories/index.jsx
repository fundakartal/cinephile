import Link from 'next/link';

const Categories = ({ categories }) => (
  <div className="flex h-[72px] gap-6">
    {categories.map((category) => (
      <Link
        key={category.id}
        className="category flex items-center justify-center bg-black bg-opacity-75 border border-solid border-[#333] w-full h-full rounded-md font-bold"
        href={`/${category.id}`}
      >
        <div>{category.name}</div>
      </Link>
    ))}
  </div>
);

export { Categories };
