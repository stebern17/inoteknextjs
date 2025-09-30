"use client";
import React, { useState } from "react";
import { Label, Textarea, TextInput, Button, Alert } from "flowbite-react";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    useremail: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [submittedname, setSubmittedName] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      });
    } catch (error) {
      setStatus("error");
    }
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
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-full">
          <Label htmlFor="name" className="text-[#1E40AF]">
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
          <Label htmlFor="email" className="text-[#1E40AF]">
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
