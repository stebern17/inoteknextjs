"use client";
import React, { useEffect, useState } from "react";
import {
  Label,
  Textarea,
  TextInput,
  Button,
  Alert,
  Dropdown,
  DropdownItem,
} from "flowbite-react";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    useremail: "",
    phone: "",
    message: "",
    domicileProvince: "",
    domicileRegency: "",
  });

  const [status, setStatus] = useState(null);
  const [submittedname, setSubmittedName] = useState("");
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProvince || !selectedRegency) {
      setStatus("domicile-error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }), // sudah benar
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
      setSubmittedName(formData.name);
      setStatus("success");
      setFormData({
        name: "",
        useremail: "",
        phone: "",
        message: "",
        domicileProvince: "",
        domicileRegency: "",
      });
      setSelectedProvince(null);
      setSelectedRegency(null);
      setRegencies([]);
    } catch (error) {
      setStatus("error");
    }
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

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      {status === "success" && (
        <Alert color="success">
          Form berhasil dikirim, terimakasih{" "}
          <span className="font-bold">{submittedname}</span>. Admin kami akan
          segera menghubungi Anda.
        </Alert>
      )}
      {status === "error" && (
        <Alert color="failure">Gagal mengirim form. Silakan coba lagi.</Alert>
      )}
      {status === "domicile-error" && (
        <Alert color="failure">Pilih domisili terlebih dahulu.</Alert>
      )}
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <Label htmlFor="name">
            Nama <span className="text-red-500">*</span>
          </Label>
          <TextInput
            type="text"
            value={formData.name}
            onChange={handleChange}
            id="name"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <TextInput
            type="email"
            value={formData.useremail}
            onChange={handleChange}
            id="useremail"
            name="useremail"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor="phone">
            No.Telp <span className="text-red-500">*</span>
          </Label>
          <TextInput
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            name="phone"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <Label htmlFor="domicile-province">
            Domisili - Provinsi <span className="text-red-500">*</span>
          </Label>
          <Dropdown
            dismissOnClick
            renderTrigger={() => (
              <button
                id="domicile-province"
                className="inline-flex items-center justify-center text-white bg-[#1E40AF] rounded-lg border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium text-sm px-4 py-2.5"
                type="button"
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
          <Label htmlFor="domicile-regency">
            Domisili - Kabupaten/Kota <span className="text-red-500">*</span>
          </Label>
          <Dropdown
            dismissOnClick
            renderTrigger={() => (
              <button
                id="domicile-regency"
                className="inline-flex items-center justify-center text-white bg-[#1E40AF] rounded-lg border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium text-sm px-4 py-2.5 disabled:opacity-60"
                type="button"
                disabled={!selectedProvince || isRegencyLoading}
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
        <Label htmlFor="message">
          Pesan <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          name="message"
          placeholder="Tulis pesan Anda di sini..."
          required
        />
      </div>

      <Button type="submit" className="text-lg mt-4 max-w-[50%]">
        Kirim
      </Button>
    </form>
  );
}
