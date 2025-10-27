'use client';
import { useEffect } from 'react';

export default function ModelVerifier() {
  useEffect(() => {
    fetch('/api/verify-model')
      .then(res => res.json())
      .then(data => {
        console.log('✅ MongoDB connection established');
        console.log('User model loaded successfully:', data.modelExists);
      })
      .catch(err => {
        console.error('❌ Model verification failed:', err);
      });
  }, []);

  return null; 
}
