"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Button,
  Dropdown,
  DropdownItem,
  Label,
  TextInput,
} from "flowbite-react";

export default function EcatalogForm({ catalogTitle, onCancel, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    useremail: "",
    phone: "",
    occupation: "",
    occupationOther: "",
    domicileProvince: "",
    domicileRegency: "",
    needs: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const occupationOptions = [
    "Home Owner",
    "Project Owner/Developer",
    "Arsitek/Desainer",
    "Kontraktor",
    "Aplikator",
    "Konsultan",
    "Lainnya",
  ];
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedRegency, setSelectedRegency] = useState(null);
  const [isProvinceLoading, setIsProvinceLoading] = useState(false);
  const [isRegencyLoading, setIsRegencyLoading] = useState(false);

  useEffect(() => {
    const fetchProvinces = async () => {
      setIsProvinceLoading(true);
      try {
        const res = await fetch("/api/wilayah/provinces");
        const payload = await res.json();
        const items = Array.isArray(payload) ? payload : payload?.data || [];
        setProvinces(items);
      } catch (error) {
        setProvinces([]);
      } finally {
        setIsProvinceLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchRegencies = async (provinceCode) => {
      setIsRegencyLoading(true);
      try {
        const res = await fetch(`/api/wilayah/regencies/${provinceCode}`);
        const payload = await res.json();
        const items = Array.isArray(payload) ? payload : payload?.data || [];
        setRegencies(items);
      } catch (error) {
        setRegencies([]);
      } finally {
        setIsRegencyLoading(false);
      }
    };

    if (selectedProvince?.code) {
      fetchRegencies(selectedProvince.code);
    } else {
      setRegencies([]);
    }
  }, [selectedProvince]);

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

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setSelectedRegency(null);
    setFormData((prev) => ({
      ...prev,
      domicileProvince: province?.name || "",
      domicileRegency: "",
    }));
  };

  const handleRegencySelect = (regency) => {
    setSelectedRegency(regency);
    setFormData((prev) => ({
      ...prev,
      domicileRegency: regency?.name || "",
    }));
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

    if (!selectedProvince || !selectedRegency) {
      setStatus("domicile-error");
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
      {status === "domicile-error" && (
        <Alert color="failure">Pilih domisili terlebih dahulu.</Alert>
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
            No. Telp (Whatsapp) <span className="text-red-500">*</span>
          </Label>

          <TextInput
            id="ecatalog-phone"
            name="phone"
            type="tel"
            placeholder="08XXXXXXXX"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // hanya angka
              if (value.length <= 13) {
                setFormData({ ...formData, phone: value });
              }
            }}
            inputMode="numeric"
            pattern="[0-9]{10,13}"
            minLength={10}
            maxLength={13}
            required
            disabled={isSubmitting}
          />

          {formData.phone.length > 0 &&
            (formData.phone.length < 10 || formData.phone.length > 13) && (
              <p className="text-sm text-red-500 mt-1">
                Nomor harus 10–13 digit dan hanya berisi angka.
              </p>
            )}
        </div>

        <div className="flex flex-col w-full sm:col-span-2">
          <Label htmlFor="ecatalog-occupation">
            Profesi <span className="text-red-500">*</span>
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
              Pilih profesi
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
              Profesi lainnya <span className="text-red-500">*</span>
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

        <div className="flex flex-col w-full">
          <Label htmlFor="ecatalog-domicile-province">
            Domisili - Provinsi <span className="text-red-500">*</span>
          </Label>
          <Dropdown
            dismissOnClick
            renderTrigger={() => (
              <button
                id="ecatalog-domicile-province"
                className="inline-flex items-center justify-center text-white bg-[#1E40AF] rounded-lg border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium text-sm px-4 py-2.5 disabled:opacity-60"
                type="button"
                disabled={isSubmitting}
              >
                {selectedProvince?.name ||
                  (isProvinceLoading ? "Memuat provinsi..." : "Pilih provinsi")}
              </button>
            )}
          >
            <div className="max-h-64 overflow-y-auto">
              {provinces.length === 0 && !isProvinceLoading && (
                <DropdownItem disabled>Tidak ada data provinsi.</DropdownItem>
              )}

              {provinces.map((province) => (
                <DropdownItem
                  key={province.code}
                  onClick={() => handleProvinceSelect(province)}
                >
                  {province.name}
                </DropdownItem>
              ))}
            </div>
          </Dropdown>
        </div>

        <div className="flex flex-col w-full">
          <Label htmlFor="ecatalog-domicile-regency">
            Domisili - Kabupaten/Kota <span className="text-red-500">*</span>
          </Label>
          <Dropdown
            dismissOnClick
            renderTrigger={() => (
              <button
                id="ecatalog-domicile-regency"
                className="inline-flex items-center justify-center text-white bg-[#1E40AF] rounded-lg border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium text-sm px-4 py-2.5 disabled:opacity-60"
                type="button"
                disabled={!selectedProvince || isRegencyLoading || isSubmitting}
              >
                {!selectedProvince
                  ? "Pilih provinsi dulu"
                  : selectedRegency?.name ||
                    (isRegencyLoading
                      ? "Memuat kabupaten/kota..."
                      : "Pilih kabupaten/kota")}
              </button>
            )}
          >
            <div className="max-h-64 overflow-y-auto">
              {selectedProvince &&
                regencies.length === 0 &&
                !isRegencyLoading && (
                  <DropdownItem disabled>
                    Tidak ada data kabupaten/kota.
                  </DropdownItem>
                )}

              {regencies.map((regency) => (
                <DropdownItem
                  key={regency.code}
                  onClick={() => handleRegencySelect(regency)}
                >
                  {regency.name}
                </DropdownItem>
              ))}
            </div>
          </Dropdown>
        </div>
      </div>
      <div>
        <label
          htmlFor="ecatalog-needs"
          className="block mb-2 font-medium text-gray-700"
        >
          Kebutuhan Anda terhadap produk kami
          <span className="text-red-500">*</span>
        </label>
        <TextInput
          id="ecatalog-needs"
          name="needs"
          type="text"
          value={formData.needs}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
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
          {isSubmitting ? "Mengirim..." : "Download Catalog"}
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
