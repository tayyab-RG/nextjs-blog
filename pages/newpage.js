import Link from 'next/link'
import Image from 'next/image'


export default function newPage() {
    return (
        <>
            <h1>New Page!</h1>
            <h2>
                <Link href="/">
                    <a>Back To Home!</a>
                </Link>
            </h2>
            {/* <img src="/images/profile.png" width="1440" height="1440" alt="Your Name" /> */}
            <Image
                src={"/images/profile.png"}
                width={1440}
                height={1440}
                alt={"Name is Khan"}
            />
        </>        
    );
}