import type { Metadata } from "next";
import { LegalDocument } from "../legal-document";

export const metadata: Metadata = {
  title: "Terms & Conditions | Floreza Technologies",
  description: "Floreza Technologies website Terms & Conditions, last updated September 2026.",
};

export default function TermsAndConditionsPage() {
  return <LegalDocument filename="terms-and-conditions.txt" />;
}
