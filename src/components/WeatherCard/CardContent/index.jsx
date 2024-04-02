function CardContent({ label, value, icon, day }) {
  return (
    <>
      <div className="flex justify-between items-center text-myGray-200 w-[327px] bg-myGray-800 ">
        <div className="flex items-center ">
          <div className="mr-2 w-[24px] h-[24px] flex justify-center items-center">
            {icon}
          </div>
          <p className="text-heading-sm text-myGray-200">{label}</p>
        </div>
        <div className="text-myGray-100">{value}</div>
      </div>
    </>
  );
}

export default CardContent;
