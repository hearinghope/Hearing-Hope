import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/service.module.css';

const ServiceTypesStrip = () => {
    return (
        <div className={styles.TypesStrip}>

            <div className={styles.TypesHeading}>
            <h2>Other Services</h2>

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
                        
                            <Link href={'./hearing-test-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Hearing Test Services
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./speech-therapy-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Speech Therapy Services
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./hearing-care-solution-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Hearing Care
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'./hearing-aid-center-delhi'}> 
                            <button type='button' className={styles.TypesButton}>
                            Hearing Aid Center
                            </button></Link>
                       
                    </h2>
                </div>
                
            </div>
    </div>
    );
};
export default ServiceTypesStrip ;