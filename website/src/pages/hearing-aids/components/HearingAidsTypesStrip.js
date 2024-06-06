import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/products.module.css';

const HearingAidsTypesStrip = () => {
    return (
        <div className={styles.TypesStrip}>

            <div className={styles.TypesHeading}>
            <h1>Other Hearing Aid Types</h1>

            </div>
            <div className={styles.TypesLinksContainer}>
                <div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/bte-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            BTE Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div>
                <div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/cic-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            CIC Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/iic-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            IIC Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/itc-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            ITC Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/micro-in-canal-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            Micro-in-Canal Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/bluetooth-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            Bluetooth Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/rechargeable-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            Rechargeable Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/ric-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            RIC Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/wireless-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            Wireless Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/pocket-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            Pocket Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div><div className={styles.TypesLinks}>
                    <h2>
                        
                            <Link href={'../types/analog-hearing-aid'}> 
                            <button type='button' className={styles.TypesButton}>
                            Analog Hearing Aids
                            </button></Link>
                       
                    </h2>
                </div>
                
            </div>
    </div>
    );
};
export default HearingAidsTypesStrip ;