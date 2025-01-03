'use server';

export default async function voteFE(leaderId: number) {
  try {
    // const formData = new FormData();
    // formData.set('leaderId', leaderId.toString());

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/leader?part=FRONTEND`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ leaderId }),
      },
    );

    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    const data = await response.json();

    console.log(data);
  } catch {}
}
