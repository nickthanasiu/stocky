import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { User } from "../user";

export default async function Dashboard() {
    console.log('GET Dashboard Server component');

    const session = await getServerSession(authOptions)

    return (
        <main>
            <h1>Dashboard</h1>

            <h2>Server Session</h2>
            <pre>{JSON.stringify(session)}</pre>
            <h2>Client Call</h2>
            <User />
        </main>
    );
}