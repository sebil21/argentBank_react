import User from '../components/User';
import AccountChecking from '../components/AccountChecking';
import AccountSavings from '../components/AccountSavings';
import AccountCreditCard from '../components/AccountCreditCard';

export default function UserConnected() {
    return (
        <main className="main bg-dark">
            <User />
            <h2 className="sr-only">Accounts</h2>
            <AccountChecking />
            <AccountSavings />
            <AccountCreditCard />
        </main>
    );
}
