// Home Page
import { ProfileCard } from "@/components/ui/ProfileCard";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Page",
    description: "This is my Portfolio HomePage",
};

export default function HomePage() {
    return <ProfileCard />;
}
