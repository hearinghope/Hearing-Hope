import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/service.module.css';

const ServiceTypesStrip = () => {
    return (
        <div className={styles.TypesStrip}>

            <div className={styles.TypesHeading}>
            <h1>Other Services</h1>

            </div>
            <div className={styles.TypesLinksContainer}>
                <div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./AllServices'}> 
                            <button type='button' className={styles.TypesButton}>
                            All Services
                            </button></Link>
                       
                    </h2>
                </div>
                <div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./hearing-test-in-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Hearing Test
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./speech-therapy-in-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Speech Therapy
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./hearing-care-solution-in-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Hearing Care
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./hearing-aid-center-in-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Hearing Aid Centers
                            </button></Link>
                       
                    </h2>
                </div>
                
            </div>
    </div>
    );
};
export default ServiceTypesStrip ;