import React from "react";
import Image from "next/image";

interface PerkProps {
    href: string;
    icon: string;
    title: string;
    description: string;
    level: string;
    disabled?: boolean;
}

const Perk: React.FC<PerkProps> = ({ href, icon, title, description, level, disabled = false }) => {
    const labelBgColor = level === "PRO" ? "bg-black font-bold" : "bg-purple-100";
    const labelTextColor = level === "PRO" ? "text-white" : "text-purple-700";

    const cardStyle = disabled ? "opacity-50 cursor-not-allowed" : "opacity-100";

    return (
        <a className={`block rounded-xl border p-4 sm:p-6 lg:p-8 ${cardStyle}`} href={disabled ? "#" : href}>
            <div className="mb-2 flex items-center justify-between">
                <Image src={icon} alt="Placeholder" width={35} height={35} />
                <span className={`rounded-full px-2.5 py-0.5 text-sm ${labelBgColor} ${labelTextColor}`}>{level}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-gray-800 sm:text-xl">{title}</h3>

            <p className="mt-4 text-sm text-gray-400">{description}</p>
        </a>
    );
};

export default Perk;
