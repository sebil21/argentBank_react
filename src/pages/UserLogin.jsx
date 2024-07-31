import AccountSection from './components/AccountSection';
import EditUser from './components/EditUser';

export default function UserLogin() {
    return (
        <main className="main bg-dark">
            <EditUser />
            <h2 className="sr-only">Accounts</h2>
            <AccountSection
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <AccountSection
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <AccountSection
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    );
}
