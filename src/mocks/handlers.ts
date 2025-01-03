import { http, HttpResponse, StrictResponse } from 'msw';
// import { faker } from "@faker-js/faker";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  // return faker.date.between({
  //   from: lastWeek,
  //   to: Date.now(),
  // });
}
const User = [
  {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: '/yRsRRjGO.jpg',
    password: '1234',
  },
  {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
    password: '1234',
  },
];
const Posts = [];
const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const handlers = [
  http.post('/signin', async ({ request }) => {
    const body = (await request.json()) as { id: string; password: string };
    const { id, password } = body;

    const user = User.find((u) => u.id === id && u.password === password);
    if (user) {
      return HttpResponse.json(user, {
        headers: {
          'Set-Cookie': 'session=mock-session; HttpOnly; Path=/',
        },
      });
    }
    return HttpResponse.text('Invalid credentials', { status: 401 });
  }),
  http.post('/api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.post('/api/users', async ({ request }) => {
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
  }),

  http.get('/api/users/:userId', ({ request, params }): StrictResponse<any> => {
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(found);
    }
    return HttpResponse.json(
      { message: 'no_such_user' },
      {
        status: 404,
      },
    );
  }),
];
