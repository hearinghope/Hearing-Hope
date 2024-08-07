import { useEffect } from 'react';
import { useRouter } from 'next/router';




const HearingTest = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/hearing-test-delhi', undefined, { shallow: true });
  }, [router]);

  return null; // Or a loading spinner if you prefer
};

export default HearingTest;

