import User from '../components/User';
import AllTransactions from '../components/AllTransactions';

export default function UserConnected() {
    return (
        <main className="main bg-dark">
            <User />
            <h2 className="sr-only">Accounts</h2>
            <AllTransactions />
        </main>
    );
}
