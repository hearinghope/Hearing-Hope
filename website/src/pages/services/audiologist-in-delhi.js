import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Audiologist from './audiologist-in-delhi-new';




const Audiologist = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/audiologist-in-delhi-new', undefined, { shallow: true });
  }, [router]);

  return null; // Or a loading spinner if you prefer
};

export default Audiologist;

