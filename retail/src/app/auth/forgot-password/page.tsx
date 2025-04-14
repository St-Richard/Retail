'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<'email' | 'otp' | 'newPassword'>('email');
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission and OTP generation
    setStep('otp');
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification
    setStep('newPassword');
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset
  };

  const renderEmailStep = () => (
    <form onSubmit={handleEmailSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Send Reset Code
      </button>
    </form>
  );

  const renderOTPStep = () => (
    <form onSubmit={handleOTPSubmit} className="space-y-4">
      <div>
        <label htmlFor="otp" className="block text-sm font-medium text-card-foreground">
          Enter OTP
        </label>
        <div className="mt-1 flex justify-center space-x-2">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
              value={formData.otp[index] || ''}
              onChange={(e) => {
                const newOTP = formData.otp.split('');
                newOTP[index] = e.target.value;
                setFormData({ ...formData, otp: newOTP.join('') });
                if (e.target.value && e.target.nextElementSibling) {
                  (e.target.nextElementSibling as HTMLInputElement).focus();
                }
              }}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Verify OTP
      </button>
    </form>
  );

  const renderNewPasswordStep = () => (
    <form onSubmit={handlePasswordReset} className="space-y-4">
      <div>
        <label htmlFor="newPassword" className="block text-sm font-medium text-card-foreground">
          New Password
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
          value={formData.newPassword}
          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-card-foreground">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Reset Password
      </button>
    </form>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-card-foreground">
            {step === 'email' && 'Forgot Password'}
            {step === 'otp' && 'Enter OTP'}
            {step === 'newPassword' && 'Reset Password'}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {step === 'email' && 'Enter your email to receive a reset code'}
            {step === 'otp' && 'Enter the code sent to your email'}
            {step === 'newPassword' && 'Create a new password'}
          </p>
        </div>

        <div className="mt-8">
          {step === 'email' && renderEmailStep()}
          {step === 'otp' && renderOTPStep()}
          {step === 'newPassword' && renderNewPasswordStep()}
        </div>

        <div className="text-center text-sm">
          <Link href="/auth/login" className="font-medium text-primary hover:text-primary/80">
            Back to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}