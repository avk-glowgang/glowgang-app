import Link from "next/link";

function Footer(): JSX.Element {
    return (
        <section className="bg-gray grid w-full grid-cols-2 bg-slate-800 p-5 text-white lg:p-10">
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
                <Link href="/pro">Pro Membership</Link>
                <Link href="/pro/portal">Pro Portal</Link>
            </div>
        </section>
    );
}

export default Footer;
