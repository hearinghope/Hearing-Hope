import { useEffect } from 'react';
import { useRouter } from 'next/router';




const HearingCare = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/hearing-care-solution-in-delhi-new', undefined, { shallow: true });
  }, [router]);

  return null; // Or a loading spinner if you prefer
};

export default HearingCare;

