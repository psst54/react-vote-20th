'use server';

import { redirect } from 'next/navigation';

// [회원 가입 처리]
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:4000';

export default async function signUp(
  formData: FormData,
): Promise<{ message?: string }> {
  try {
    const response = await fetch(`${BASE_URL}/api/member/join`, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
        part: formData.get('part'),
        team: formData.get('team'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }
  } catch (err) {
    return { message: 'server_error' };
  }

  return redirect('/signin');
}
