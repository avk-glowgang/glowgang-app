import Link from "next/link";

function Footer(): JSX.Element {
    return (
        <div className="bg-slate-800">
            <div className="container mx-auto max-w-5xl px-8">
                <section className="grid w-full grid-cols-2 p-5 text-white lg:p-10">
                    <div className="flex flex-col">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact Us</Link>

                        <Link href="/terms" className="mt-4">
                            Terms of Service
                        </Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/profile">Account Profile</Link>

                        <Link href="/pro" className="mt-4">
                            Pro Membership
                        </Link>
                        <Link href="/pro/portal">Pro Portal</Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Footer;
