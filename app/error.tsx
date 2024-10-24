'use client'
import React from 'react';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
  message?: string;
}

const ErrorPage: React.FC<ErrorProps> = ({ statusCode, message }) => {
  return (
    <div style={styles.container}>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>{message || 'Something went wrong. Please try again later.'}</p>
      <Link href="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};
