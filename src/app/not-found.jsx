"use client";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border border-slate-200 bg-white/80 p-8 backdrop-blur sm:p-12">
          <p className="font-display text-sm font-semibold tracking-widest text-slate-500">
            ERROR 404
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-wide text-[#013774] sm:text-4xl">
            Halaman tidak tersedia
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Maaf, halaman yang kamu cari tidak ditemukan atau mungkin sudah
            dipindahkan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-[#013774] px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:bg-[#004a9e] active:scale-[0.98]"
            >
              Kembali ke beranda
            </a>
            <a
              href="/contactform"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-slate-700 transition-colors duration-200 hover:bg-slate-50"
            >
              Hubungi kami
            </a>
          </div>

          <div className="mt-10 rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-600">
              Jika kamu yakin ini seharusnya ada, coba refresh halaman atau cek
              kembali link yang kamu buka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
