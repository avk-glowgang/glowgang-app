import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const router = useRouter();

    return (
        <nav aria-label="Breadcrumb" className="container mx-auto my-5 max-w-5xl px-8">
            <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
                {items.map((item, index) => (
                    <React.Fragment key={item.href}>
                        {index > 0 && (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        )}
                        <li>
                            {item.href === router.pathname ? (
                                <span>{item.label}</span>
                            ) : (
                                <Link href={item.href}>
                                    <p className="block text-blue-600 transition hover:text-gray-700">{item.label}</p>
                                </Link>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
