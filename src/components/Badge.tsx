type PropType = {
  item: string;
};

const Badge = ({ item }: PropType) => {
  return (
    <span className="m-0.5 inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
      {item}
    </span>
  );
};

export default Badge;
