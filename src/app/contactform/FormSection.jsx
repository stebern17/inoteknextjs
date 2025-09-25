"use client";
import React from "react";
import { Label, Textarea, TextInput, Button } from "flowbite-react";

export default function ContactFormPage() {
  const handleSubmit = (e) => {
    e.preventDefault(); // cegah reload default
    alert("Form terkirim!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="flex flex-col">
        <Label htmlFor="name">
          Nama <span className="text-red-500">*</span>
        </Label>
        <TextInput id="name" name="name" required />
      </div>

      <div>
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <TextInput id="email" name="email" type="email" required />
      </div>

      <div>
        <Label htmlFor="phone">
          No.Telp <span className="text-red-500">*</span>
        </Label>
        <TextInput id="phone" name="phone" type="tel" required />
      </div>

      <div>
        <Label htmlFor="message">
          Pesan <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tulis pesan Anda di sini..."
          required
        />
      </div>

      <Button type="submit" className="text-lg mt-4">
        Kirim
      </Button>
    </form>
  );
}
