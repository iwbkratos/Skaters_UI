'use client'
import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" style={styles.link}>
         Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  text: {
    fontSize: '1.2rem',
    margin: '20px 0',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};
