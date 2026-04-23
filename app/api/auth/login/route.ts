import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (email === 'admin@catgate.com' && password === 'admin123') {
      const token = jwt.sign(
        { email, role: 'admin' },
        'your_super_secret_key_change_me',
        { expiresIn: '7d' }
      );

      const response = NextResponse.json({ success: true });
      
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Неверный email или пароль' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}