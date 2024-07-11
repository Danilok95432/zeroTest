import Link from "next/link"

export default function Header() {
    return(
        <header>
            <Link href='/'>Главная</Link>
            <Link href='/posts'>Посты</Link>
            <Link href='/login'>Авторизация</Link>
        </header>
    )
}