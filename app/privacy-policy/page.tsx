import type { Metadata } from "next";
import { LegalDocument } from "../legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy | Floreza Technologies",
  description: "Floreza Technologies Privacy Policy, last updated September 2026.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument filename="privacy-policy.txt" />;
}
