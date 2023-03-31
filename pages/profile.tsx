import { useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Profile() {
    const { data: session } = useSession();
    return (
        <div className={styles.container}>
            {!session ? (
                <>
                    <main className={styles.main}>
                        <div className={styles.header}>
                            <h1>Not signed in!</h1>
                        </div>
                    </main>
                </>
            ) : (
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h1>Signed in as {session?.user?.name}</h1>
                    </div>
                </main>
            )}
        </div>
    );
}