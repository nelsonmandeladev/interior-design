import { LandingPageFooter, LandingPageHeader, PageHero } from "@/components";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <PageHero />
            {children}
            <LandingPageFooter />
        </div>
    )
}