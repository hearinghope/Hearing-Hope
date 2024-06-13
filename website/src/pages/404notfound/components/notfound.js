import styles from '../styles/notfound.module.css';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            router.push('/');
        }

        return () => {
            clearInterval(interval);
        };
    }, [countdown, router]);

    return (
        <div className={styles.Notfoundcontainer}>
            <div className={styles.Notfoundcontent}>
                <div className={styles.Notfoundlogo}>
                    <Image src='/logo-transparent.png' alt='Logo' width={400} height={400} />
                </div>
                <div className={styles.Notfoundheading}>
                    <h1>404 Error, This Page doesn&apos;t exist on the website</h1>
                </div>
                <div className={styles.Notfoundtext}>
                    <p>
                        You will be redirected to the Home page in <span className={styles.Notfoundtime}>{countdown}</span> seconds
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
