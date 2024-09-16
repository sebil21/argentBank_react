import AccountSection from '../components/AccountSection';

export default function AllTransactions() {
    return (
        <div>
            <AccountSection
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />

            <AccountSection
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />

            <AccountSection
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
        </div>
    );
}
