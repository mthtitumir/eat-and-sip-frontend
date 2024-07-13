const MenuItem = ({ title, price, tags }: Record<string, string>) => (
  <div className="flex flex-col mx-0 my-2">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="h-[1px] bg-[#DCCA87] w-[90px] mx-2" />
      <div className="flex justify-end items-end">
        <p className="">{price}</p>
      </div>
    </div>

    <div className="mt-2">
      <p className="text-[#AAAAAA]">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
