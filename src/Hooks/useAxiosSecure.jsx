'use client';

import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { useRouter } from 'next/navigation'

const axiosSecure = axios.create({
    baseURL: 'https://blood-donate-server.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { logout } = useContext(AuthContext);
    const router = useRouter();

    // intercept response and check for unauthorized responses.
    axiosSecure.interceptors.response.use(
        response => response,
        async error => {
            console.log('Error tracked in the interceptor', error.response)
            if (
                error.response &&
                (error.response.status === 401 || error.response.status === 403)
            ) {
                await logout();
                router.push('/login');
            }

            return Promise.reject(error)
        }
    )
}
export default axiosSecure
