import React, { useState } from 'react';
import { Container, Input, Button } from 'semantic-ui-react';

const SignupBar = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubscription = async () => {
    setIsEmailInvalid(false);
    setErrorFeedback('');

    if (emailAddress.trim() === '') {
      setIsEmailInvalid(true);
      setErrorFeedback('Please provide an email address');
      return;
    }

    if (!isValidEmail(emailAddress)) {
      setIsEmailInvalid(true);
      setErrorFeedback('Invalid email address format');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(emailAddress)}`,
      });

      if (response.status === 200) {
        setErrorFeedback('Email subscription successful');
      } else {
        setErrorFeedback('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorFeedback('An unexpected error occurred');
    }
  };

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: 'beige',
          padding: '10px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0',
        }}
      >
        <p
          style={{
            marginRight: '10px',
            marginLeft: '115px',
            fontWeight: 'bold',
            fontSize: '18px',
          }}
        >
          Subscribe to receive our daily updates
        </p>
        <Input
          placeholder="Enter your email address"
          value={emailAddress}
          onChange={(e) => {
            setEmailAddress(e.target.value);
            setIsEmailInvalid(false);
            setErrorFeedback('');
          }}
          style={{
            marginRight: '10px',
            borderBottom: isEmailInvalid ? '2px solid red' : '2px solid transparent',
          }}
        />
        <Button onClick={handleSubscription} primary style={{ marginRight: '20px' }}>
          Subscribe
        </Button>
        <div>
          {errorFeedback && <p style={{ color: 'red', marginLeft: '10px' }}>{errorFeedback}</p>}
        </div>
      </Container>
    </>
  );
};

export default SignupBar;
