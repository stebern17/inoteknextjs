export default function DistributorCard({
  name,
  address,
  phone,
  email,
  website,
  city,
}) {
  return (
    <div className="border bg-[#0253AE] p-4 rounded-xl text-white flex flex-col gap-2 drop-shadow-xl h-[230px]">
      <h2 className="font-bold text-2xl">{name}</h2>
      <div className="font-light text-sm flex flex-col gap-2">
        <div>
          <p>{address}</p>
          <p>{city}</p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{website}</p>
        </div>
      </div>
    </div>
  );
}
