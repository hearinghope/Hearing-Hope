import { useEffect } from 'react';
import { useRouter } from 'next/router';




const SpeechTherapy = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/speech-therapy-in-delhi-new', undefined, { shallow: true });
  }, [router]);

  return null; // Or a loading spinner if you prefer
};

export default SpeechTherapy;

