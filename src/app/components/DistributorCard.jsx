export default function DistributorCard({
  name,
  address,
  phone,
  email,
  website,
  whatsappLink,
}) {
  const hasPhone = !!phone;
  const hasWhatsapp = !!whatsappLink;

  return (
    <div className="border bg-[#0253AE] p-4 rounded-xl text-white flex flex-col gap-2 drop-shadow-xl h-[250px] lg:h-[300px]">
      <h2 className="font-bold text-2xl">{name}</h2>

      <div className="font-light text-sm flex flex-col gap-2">
        <p>{address}</p>

        {(hasPhone || email || website) && (
          <div>
            <p className="font-semibold">Contact</p>

            {/* PHONE / WHATSAPP */}
            {hasPhone &&
              (hasWhatsapp ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-300 block transition-colors duration-300"
                >
                  0{phone}
                </a>
              ) : (
                <span className="block">{phone}</span>
              ))}

            {email && <p>{email}</p>}
            {website && <p>{website}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
