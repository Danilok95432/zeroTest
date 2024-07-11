import { NextResponse } from 'next/server';
import { $users } from '@/app/store/users';
import { User } from '@/app/store/users';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const user = $users.value?.filter((user: User) => user.login == username && user.password == password)
  if (user?.length != 0) {
    return NextResponse.json({ message: 'Authentication successful', token: 'fakeToken' });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
