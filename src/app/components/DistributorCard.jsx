export default function DistributorCard({
  name,
  address,
  phone,
  email,
  website,
}) {
  const hasPhone = !!phone;
  const hasEmail = !!email;
  const hasWebsite = !!website;
  const showContact = hasPhone || hasEmail || hasWebsite;

  return (
    <div className="border bg-[#0253AE] p-4 rounded-xl text-white flex flex-col gap-2 drop-shadow-xl h-[250px] lg:h-[300px]">
      <h2 className="font-bold text-2xl">{name}</h2>
      <div className="font-light text-sm flex flex-col gap-2">
        <div>
          <p>{address}</p>
        </div>
        {showContact && (
          <div>
            <p className="font-semibold">Contact</p>
            {hasPhone && <p>0{phone}</p>}
            {hasEmail && <p>{email}</p>}
            {hasWebsite && <p>{website}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
