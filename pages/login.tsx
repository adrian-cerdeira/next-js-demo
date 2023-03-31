import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Login() {
    const { data: session } = useSession();
    return (
        <div className={styles.container}>
            {!session ? (
                <>
                    <main className={styles.main}>
                        <div className={styles.header}>
                            <h1>Not signed in!</h1>
                            <button className='btn btn-secondary' onClick={() => signIn()}>Sign In</button>
                        </div>
                    </main>
                </>
            ) : (
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h1>Signed in as {session.user.name}</h1>
                        <button className='btn btn-secondary' onClick={() => signOut()}>Sign out</button>
                    </div>
                </main>
            )}
        </div>
    );
}