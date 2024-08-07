  import { useEffect } from 'react';
  import { useRouter } from 'next/router';



  
  const HearingAidCentre = () => {
    const router = useRouter();
  
    useEffect(() => {
      router.replace('/services/hearing-aid-center-delhi', undefined, { shallow: true });
    }, [router]);
  
    return null; // Or a loading spinner if you prefer
  };
  
  export default HearingAidCentre;

