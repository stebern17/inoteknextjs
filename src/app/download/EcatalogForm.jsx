"use client";

import { useMemo, useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";

export default function EcatalogForm({ catalogTitle, onCancel, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    useremail: "",
    phone: "",
    occupation: "",
    occupationOther: "",
    needs: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const occupationOptions = ["Mahasiswa", "Karyawan", "Wirausaha", "Lainnya"];
  const needsOptions = [
    "Informasi Produk",
    "Penawaran Harga",
    "Kerjasama Bisnis",
    "Lainnya",
  ];

  const message = useMemo(() => {
    const title = String(catalogTitle || "").trim();
    return title.length > 0
      ? `Permintaan download E-Catalog: ${title}`
      : "Permintaan download E-Catalog";
  }, [catalogTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "occupation" && value !== "Lainnya") {
        return { ...prev, occupation: value, occupationOther: "" };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resolvedOccupation =
      formData.occupation === "Lainnya"
        ? String(formData.occupationOther || "").trim()
        : String(formData.occupation || "").trim();

    if (formData.occupation === "Lainnya" && resolvedOccupation.length === 0) {
      setStatus("occupationOtherRequired");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/ecatalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            ...formData,
            occupation: resolvedOccupation,
            catalogTitle: String(catalogTitle || "").trim(),
            message,
          },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      onSuccess?.();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      {status === "error" && (
        <Alert color="failure">Gagal mengirim form. Silakan coba lagi.</Alert>
      )}
      {status === "occupationOtherRequired" && (
        <Alert color="failure">Mohon isi pekerjaan lainnya.</Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col w-full">
          <Label htmlFor="ecatalog-name">
            Nama <span className="text-red-500">*</span>
          </Label>
          <TextInput
            id="ecatalog-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex flex-col w-full">
          <Label htmlFor="ecatalog-email">
            Email <span className="text-red-500">*</span>
          </Label>
          <TextInput
            id="ecatalog-email"
            name="useremail"
            type="email"
            value={formData.useremail}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex flex-col w-full sm:col-span-2">
          <Label htmlFor="ecatalog-phone">
            No. Telp <span className="text-red-500">*</span>
          </Label>
          <TextInput
            id="ecatalog-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex flex-col w-full sm:col-span-2">
          <Label htmlFor="ecatalog-occupation">
            Pekerjaan <span className="text-red-500">*</span>
          </Label>
          <select
            name="occupation"
            id="ecatalog-occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0253AE]/40"
          >
            <option value="" disabled>
              Pilih pekerjaan
            </option>
            {occupationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {formData.occupation === "Lainnya" && (
          <div className="flex flex-col w-full sm:col-span-2">
            <Label htmlFor="ecatalog-occupationOther">
              Pekerjaan lainnya <span className="text-red-500">*</span>
            </Label>
            <TextInput
              id="ecatalog-occupationOther"
              name="occupationOther"
              type="text"
              value={formData.occupationOther}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
        )}
      </div>
      <div>
        <label
          htmlFor="ecatalog-needs"
          className="block mb-2 font-medium text-gray-700"
        >
          Kebutuhan Anda terhadap produk kami
          <span className="text-red-500">*</span>
        </label>
        <select
          name="needs"
          id="ecatalog-needs"
          value={formData.needs}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0253AE]/40"
        >
          <option value="" disabled>
            Pilih kebutuhan
          </option>
          {needsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
        <Button
          type="button"
          color="gray"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Batal
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Mengirim..." : "Kirim & Download"}
        </Button>
      </div>

      {status === "success" && (
        <p className="text-sm text-gray-500">
          Data berhasil dikirim. Memulai download...
        </p>
      )}
    </form>
  );
}
