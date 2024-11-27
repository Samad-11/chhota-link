import { redirect } from 'next/navigation'

const NotFount = () => {
    redirect(process.env.BASE_URL!)
}

export default NotFount