'use client'

import { useState } from 'react';
import styles from './page.module.scss'

const LoginPage = () => {
  const [border, setBorder] = useState(styles.input_view)
  const [typePassword, setTypePassword] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()
    setMessage(data.message)
  };

  return (
    <div className={styles.window}>
      <h1 className={styles.title}>Вход</h1>
        <form 
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.input_form}>
            <input 
              id='username' 
              className={styles.input_view} 
              type='text' 
              onChange={(e) => setUsername(e.target.value)} 
              value={username}
            />
            <label 
              htmlFor="username" 
              className={username ? styles.placeholder_top : styles.placeholder}
            >
              {
                username ? '' : 'Ваш username'
              }
            </label>
          </div>
          <div className={styles.input_form}>
            <input 
              id='password' 
              className={border} 
              type={typePassword ? 'text' : 'password'} 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
            {
              password != '' ?
              <button id={typePassword ? styles.close_password : styles.open_password} onClick={() => setTypePassword(!typePassword)}></button>
              :
              null
            }
            <label 
              htmlFor="password" 
              className={password ? styles.placeholder_top : styles.placeholder}
            >
              {
                password ? '' : 'Ваш пароль'
              }
            </label>
          </div>
          <button 
            className={ username != '' && password != '' ? styles.submit : styles.disable} 
            type='submit'
          >
            Войти
          </button>
        </form>
        {
          message ? message : null
        }
    </div>
  );
};

export default LoginPage;
