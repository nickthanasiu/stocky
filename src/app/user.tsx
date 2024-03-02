'use client'

import { useSession } from "next-auth/react";

export const User = () => {
    const { data: session } = useSession ();

    console.log('useSession : data : ', session);
    const loading = !session;

    return <pre>{loading? 'Loading...' : JSON.stringify(session)}</pre>
};