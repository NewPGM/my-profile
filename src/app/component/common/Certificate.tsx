"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  issuedBy: string;
  issueDate: string;
  certificateLink: string;
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-orange-500/20 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {certificate.image ? (
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 text-lg">No Image</span>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href={certificate.certificateLink}
            target="_blank"
            className="px-3 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition-colors"
          >
            View Certificate
          </Link>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{certificate.description}</p>
        <div className="text-gray-400 text-sm mb-2">
          <span className="font-medium">Issued By:</span> {certificate.issuedBy}
        </div>
        <div className="text-gray-400 text-sm">
          <span className="font-medium">Issue Date:</span> {certificate.issueDate}
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;