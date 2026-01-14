import { redirect } from 'next/navigation';

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  // Redirect to the BackorderPRO privacy policy by default
  redirect(`/${params.locale}/privacy/backorderpro`);
}

